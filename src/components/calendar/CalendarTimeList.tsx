import * as S from './Calendar.styled';
import { STARTHOUR, ENDHOUR } from '@constants/time';

const TimeBlock = ({ time }: { time: number }) => {
  return <S.CalendarTimeSection>{time}</S.CalendarTimeSection>;
};

const CalendarTimeList = () => {
  return (
    <S.CalendarTimeListContainer>
      {Array.from(
        { length: ENDHOUR - STARTHOUR + 1 },
        (_, index) => STARTHOUR + index,
      ).map((hour) => (
        <TimeBlock key={hour} time={hour} />
      ))}
    </S.CalendarTimeListContainer>
  );
};

export default CalendarTimeList;
