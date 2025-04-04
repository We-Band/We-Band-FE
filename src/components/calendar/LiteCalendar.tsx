import { NOSCHEDULE } from '@constants/time';
import * as S from './Calendar.styled';
import CalendarDateList from './CalendarDateList';
import CalendarTimeList from './CalendarTimeList';
import { parsePathToUserData, sumBinaryStrings } from '@utils/urlHandle';
import CalendarScheduleList from './CalendarScheduleList';

const LiteCalendar = ({ userToggle }: { userToggle: boolean }) => {
  const path = window.location.pathname;
  const userData = parsePathToUserData(path);
  const totalUser = parsePathToUserData(path).length;
  const scheduleString = sumBinaryStrings(userData);

  return (
    <S.LiteCalendarContainer>
      <CalendarDateList />
      <S.CalendarScheduleContainer>
        <CalendarTimeList />
        {!userToggle ? (
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
        )}
      </S.CalendarScheduleContainer>
    </S.LiteCalendarContainer>
  );
};

export default LiteCalendar;
