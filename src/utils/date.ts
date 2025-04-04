export const FIRSTDAY = 1;

export const MONTHNAMES = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

export const MonthToNum = (month: string): number => {
  return MONTHNAMES.indexOf(month);
};

// 2 => 'MAR', 0 => 'JAN'
export const NumToMonth = (month: number): string => {
  return MONTHNAMES[month];
};

export const DAYNAMES = ['일', '월', '화', '수', '목', '금', '토'];

export const NumToDay = (day: number): string => {
  return DAYNAMES[day];
};

export const encodeDate = (
  year: number,
  month: number,
  date: number,
): string => {
  return `${year.toString().slice(2)}${month.toString().padStart(2, '0')}${date.toString().padStart(2, '0')}`;
};

export const decodeDate = (
  code: string,
): { year: number; month: number; date: number } => {
  const year = 2000 + Number(code.slice(0, 2));
  const month = Number(code.slice(2, 4));
  const date = Number(code.slice(4, 6));
  return { year, month, date };
};

export const getWeekDates = (year: number, month: number, date: number) => {
  const week: { month: number; date: number; day: string }[] = [];

  for (let i = 0; i < 7; i++) {
    const current = new Date(year, month - 1, date + i);
    week.push({
      month: current.getMonth() + 1,
      date: current.getDate(),
      day: NumToDay(current.getDay()),
    });
  }

  return week;
};
