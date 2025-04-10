import { NOSCHEDULE } from '@constants/time';
import * as S from './Calendar.styled';
import CalendarDateList from './CalendarDateList';
import CalendarTimeList from './CalendarTimeList';
import { parsePathToUserData, sumBinaryStrings } from '@utils/urlHandle';
import CalendarScheduleList from './CalendarScheduleList';
import { useLiteContext } from '@components/lite/LiteHome';
import { useEffect, useState } from 'react';
import { encode } from '@utils/urlHandle';

const LiteCalendar = ({ userToggle }: { userToggle: boolean }) => {
  const path = window.location.pathname;
  const userData = parsePathToUserData(path);
  const totalUser = parsePathToUserData(path).length;
  const scheduleString = sumBinaryStrings(userData);
  const { selectedUser, setEncodedSchedule } = useLiteContext();
  const [selectedUserSchedule, setSelectedUserSchedule] = useState('');

  useEffect(() => {
    if (selectedUser === '') {
      setSelectedUserSchedule(NOSCHEDULE);
      return;
    }

    const targetIndex = userData.findIndex(
      (user) => user.name === selectedUser,
    );
    const targetSchedule = userData[targetIndex]?.binaryData;
    setSelectedUserSchedule(targetSchedule);
    setEncodedSchedule(encode(targetSchedule));
  }, [selectedUser]);

  return (
    <S.LiteCalendarContainer>
      <CalendarDateList />
      <S.CalendarScheduleContainer>
        <CalendarTimeList />
        {selectedUser === '' ? (
          !userToggle ? (
            <>
              <CalendarScheduleList
                totalUser={totalUser}
                scheduleString={scheduleString}
                edit={false}
              />
            </>
          ) : (
            <>
              <CalendarScheduleList
                totalUser={1}
                scheduleString={NOSCHEDULE}
                edit={userToggle}
              />
            </>
          )
        ) : (
          <>
            <CalendarScheduleList
              key={selectedUserSchedule}
              totalUser={1}
              scheduleString={selectedUserSchedule}
              edit={userToggle}
            />
          </>
        )}
      </S.CalendarScheduleContainer>
    </S.LiteCalendarContainer>
  );
};

export default LiteCalendar;
