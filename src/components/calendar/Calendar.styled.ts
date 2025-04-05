import styled from 'styled-components';
import { transparentize } from 'polished';

//Lite Container
export const LiteCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;

  padding: 0px 12px 0px 0px;
  margin: 0 auto;
`;

// Date List
export const CalendarDateListContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;

  padding: 8px;
  gap: 16px;
`;

export const CalendarDateSection = styled.div`
  display: flex;
  width: 28px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4px;
`;

export const CalendarDate = styled.h6`
  ${({ theme }) => theme.fontStyles.S01_Bold};
  color: ${({ theme }) => theme.colors.Gray.gray500};
`;

export const CalendarText = styled.h6`
  ${({ theme }) => theme.fontStyles.S01_Bold};
  color: ${({ theme }) => theme.colors.Gray.gray400};
  text-align: center;
`;

//Time List
export const CalendarTimeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-start;

  padding: 0px 8px 16px 8px;
  gap: 16px;
`;

export const CalendarTimeSection = styled.div`
  color: ${({ theme }) => theme.colors.Gray.gray400};
  ${({ theme }) => theme.fontStyles.S01_Regular};

  display: flex;
  width: 24px;
  height: 24px;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

// Schedule List
export const CalendarScheduleContainer = styled.div`
  display: flex;
`;

export const CalendarScheduleLine = styled.div``;

export const CalendarScheduleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.Gray.gray100};
`;

export const CalendarSchedule = styled.div<{
  $num: number;
  $total: number;
  $selected?: boolean;
}>`
  width: 44px;
  height: 19.5px;

  background-color: ${({ theme, $num, $total, $selected }) =>
    $selected
      ? theme.colors.WBOrange.wbo200
      : transparentize(1 - $num / $total, theme.colors.Alpha.alpha)};
`;
