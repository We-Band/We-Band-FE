import * as S from './Calendar.styled';
import { CalendarDateProps } from 'src/types/calendar';

const CalendarDate: React.FC<CalendarDateProps> = ({ month, date, day }) => {
  return (
    <S.CalendarDateSection>
      <S.CalendarDate>
        {month}/{date}
      </S.CalendarDate>
      <S.CalendarText>{day}</S.CalendarText>
    </S.CalendarDateSection>
  );
};

const CalendarDateList: React.FC = () => {
  const path = window.location.pathname; // "/lite/2-31"
  const segments = path.split('/'); // ["", "lite", "2-31"]
  const monthDateSegment = segments[2]; // "2-31" (this is dynamic)
  const [STARTMONTH, STARTDATE] = monthDateSegment.split('-').map(Number); // ["2", "31"]
  //   const targetDate = new Date(STARTMONTH - 1, STARTDATE); // replace 2025 with current year if needed

  return (
    <S.CalendarDateListContainer>
      <CalendarDate month={STARTMONTH + 1} date={STARTDATE} day={''} />
    </S.CalendarDateListContainer>
  );
};

export default CalendarDateList;
