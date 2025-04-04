import { ArrowDownOnBoardingLite } from '@icons/Arrows';
import * as S from './OnBoardingLite.styled';

import { useEffect, useRef, useState } from 'react';
import {
  MONTHNAMES,
  FIRSTDAY,
  MonthToNum,
  NumToMonth,
  encodeDate,
} from '@utils/date';
import { useNavigate } from 'react-router-dom';
import { ToggleOffOnBoardingLite, ToggleOnOnBoardingLite } from '@icons/Button';

const getMaxDaysInMonth = (year: number, monthIndex: number): number => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const DatePicker: React.FC = () => {
  const today = new Date();
  const navigate = useNavigate();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(NumToMonth(today.getMonth()));
  const [date, setDate] = useState(today.getDate());
  const [dropBoxToggle, setDropBoxToggle] = useState(false);
  const [monthNum, setMonthNum] = useState(MonthToNum(month));
  const [maxDay, setMaxDay] = useState(getMaxDaysInMonth(year, monthNum));
  const [toggle, setToggle] = useState(true);
  const isInitialMount = useRef(true);

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
    const numericMonth = MonthToNum(month);
    setMonthNum(numericMonth);
    setMaxDay(getMaxDaysInMonth(year, numericMonth));
  }, [year, month]);

  useEffect(() => {
    const currentYear = today.getFullYear();
    setYear(toggle ? currentYear : currentYear + 1);
  }, [toggle]);

  const handleClick = () => {
    navigate(encodeDate(year, MonthToNum(month) + 1, date));
  };

  return (
    <>
      <S.DatePickerContainer>
        <S.YearToggle onClick={() => setToggle((prev) => !prev)}>
          <S.YearText>{toggle ? '올해' : '내년'}</S.YearText>
          {toggle ? <ToggleOffOnBoardingLite /> : <ToggleOnOnBoardingLite />}
        </S.YearToggle>

        <S.MonthPicker onClick={() => setDropBoxToggle(!dropBoxToggle)}>
          <S.MonthText>{month}</S.MonthText>
          {dropBoxToggle && (
            <S.MonthDropBox>
              {MONTHNAMES.map((monthName) => (
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
          <ArrowDownOnBoardingLite />
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

      <S.MakeScheduleButton onClick={handleClick}>
        시간 약속 만들기
      </S.MakeScheduleButton>
    </>
  );
};

export default DatePicker;
