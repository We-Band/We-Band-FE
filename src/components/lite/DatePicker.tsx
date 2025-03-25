import { useEffect, useState } from 'react';
import * as S from './OnBoardingLite.styled';
import ArrowDown from '@assets/icons/arrow-down.svg?react';
import { monthNames } from '@constants/date';

const getMaxDaysInMonth = (year: number, monthIndex: number): number => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const FIRST_DAY = 1;

const DatePicker = () => {
  const today = new Date();

  const [year, setYear] = useState<number>(today.getFullYear());
  const [month, setMonth] = useState<string>(monthNames[today.getMonth()]);
  const [date, setDate] = useState<number>(FIRST_DAY);
  const [dropBoxToggle, setDropBoxToggle] = useState<boolean>(false);

  const [maxDay, setMaxDay] = useState(
    getMaxDaysInMonth(year, monthNames.indexOf('MAR')),
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value >= 1 && value <= maxDay) {
      setDate(value);
    } else if (value < 1) {
      setDate(0);
    } else if (value > maxDay) {
      setDate(maxDay);
    }
  };

  useEffect(() => {
    setDate(FIRST_DAY); //연도나 달이 변하면 1일로 초기화
    setMaxDay(getMaxDaysInMonth(year, monthNames.indexOf(month)));
  }, [year, month]);

  return (
    <S.DatePickerContainer>
      <S.MonthPicker onClick={() => setDropBoxToggle(!dropBoxToggle)}>
        <S.MonthText>{month}</S.MonthText>
        {dropBoxToggle && (
          <S.MonthDropBox>
            {monthNames.map((monthName) => (
              <S.MonthDropItem
                key={monthName}
                isCurrent={monthName === month}
                onClick={() => {
                  setMonth(monthName);
                  setDropBoxToggle(false);
                }}
              >
                {monthName}
              </S.MonthDropItem>
            ))}
          </S.MonthDropBox>
        )}
        <ArrowDown />
      </S.MonthPicker>
      <S.DatePicker>
        <S.DateInput
          max={maxDay}
          type="number"
          value={date.toString()}
          onChange={(e) => handleDateChange(e)}
        />
        <S.DateText>일</S.DateText>
      </S.DatePicker>
    </S.DatePickerContainer>
  );
};

export default DatePicker;
