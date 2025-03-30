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

export const DAYNAMES = ['일', '월', '화', '수', '목', '금', '토'];

export const FIRSTDAY = 1;

export const MonthToNum = (month: string): number => {
  return MONTHNAMES.indexOf(month);
};

// 2 => 'MAR', 0 => 'JAN'
export const NumToMonth = (month: number): string => {
  return MONTHNAMES[month];
};
