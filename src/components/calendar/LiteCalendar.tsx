import * as S from './Calendar.styled';
import CalendarDateList from './CalendarDateList';

const LiteCalendar: React.FC = () => {
  return (
    <S.LiteCalendarContainer>
      <CalendarDateList />
    </S.LiteCalendarContainer>
  );
};

export default LiteCalendar;
