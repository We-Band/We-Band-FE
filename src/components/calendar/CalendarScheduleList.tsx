import React, { useContext, useEffect, useState } from 'react';
import * as S from './Calendar.styled';
import { BLOCKNUM, WEEK } from '@constants/time';
import { LiteContext } from '@components/lite/LiteHome';
import { decode, encode } from '@utils/urlHandle';

interface CalendarScheduleProps {
  totalUser: number;
  scheduleString: string;
  edit: boolean;
}

const CalendarScheduleList: React.FC<CalendarScheduleProps> = ({
  totalUser,
  scheduleString: initialScheduleString,
  edit,
}) => {
  const [scheduleString, setScheduleString] = useState(initialScheduleString);
  const { setEncodedSchedule } = useContext(LiteContext);

  const toggleSchedule = (weekIdx: number, sectionIdx: number, pos: number) => {
    const index = weekIdx * 30 + sectionIdx * 2 + pos;
    if (index >= scheduleString.length) return;

    const updatedChar = scheduleString[index] === '0' ? '1' : '0';
    const updatedSchedule =
      scheduleString.substring(0, index) +
      updatedChar +
      scheduleString.substring(index + 1);

    setScheduleString(updatedSchedule);
  };

  useEffect(() => {
    setScheduleString(initialScheduleString);
  }, [edit]);

  useEffect(() => {
    if (edit) {
      setEncodedSchedule(encode(scheduleString));
    }
  }, [scheduleString]);

  return (
    <>
      {Array.from({ length: WEEK }).map((_, weekIdx) => {
        // Extract 30 characters for the current day
        const daySchedule = scheduleString.slice(
          weekIdx * 30,
          (weekIdx + 1) * 30,
        );

        return (
          <S.CalendarScheduleLine key={weekIdx}>
            {Array.from({ length: BLOCKNUM }).map((_, sectionIdx) => {
              const num1 = parseInt(daySchedule[sectionIdx * 2] || '0', 10);
              const num2 = parseInt(daySchedule[sectionIdx * 2 + 1] || '0', 10);

              return (
                <S.CalendarScheduleSection key={sectionIdx}>
                  <S.CalendarSchedule
                    $num={num1}
                    $total={totalUser}
                    onClick={() =>
                      edit && toggleSchedule(weekIdx, sectionIdx, 0)
                    }
                  />
                  <S.CalendarSchedule
                    $num={num2}
                    $total={totalUser}
                    onClick={() =>
                      edit && toggleSchedule(weekIdx, sectionIdx, 1)
                    }
                  />
                </S.CalendarScheduleSection>
              );
            })}
          </S.CalendarScheduleLine>
        );
      })}
    </>
  );
};

export default CalendarScheduleList;
