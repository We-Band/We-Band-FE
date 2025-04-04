import { decodeDate, getWeekDates } from '@utils/date';
import * as S from './Calendar.styled';

interface CalendarDateProps {
  index: number;
  month: number;
  date: number;
  day: string;
}

const CalendarDate: React.FC<CalendarDateProps> = ({
  month,
  date,
  day,
  index,
}) => {
  return (
    <S.CalendarDateSection>
      <S.CalendarDate>
        {(date == 1 || index == 0) && month + '/'}
        {date}
      </S.CalendarDate>
      <S.CalendarText>{day}</S.CalendarText>
    </S.CalendarDateSection>
  );
};

const CalendarDateList: React.FC = () => {
  const path = window.location.pathname;
  const segments = path.split('/'); // ["", "lite", "2025-2-31"]

  const { year, month, date } = decodeDate(segments[2]);
  const weekDates: { month: number; date: number; day: string }[] =
    getWeekDates(year, month, date);

  return (
    <S.CalendarDateListContainer>
      {weekDates.map(({ month, date, day }, idx) => (
        <CalendarDate
          key={idx}
          index={idx}
          month={month}
          date={date}
          day={day}
        />
      ))}
    </S.CalendarDateListContainer>
  );
};

export default CalendarDateList;
