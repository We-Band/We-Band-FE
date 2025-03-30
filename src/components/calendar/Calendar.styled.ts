import styled from 'styled-components';

export const LiteCalendarContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 0px 24px 0px 12px;
  border: 1px solid;
`;

// Month List
export const CalendarDateListContainer = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
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
  color: ${({ theme }) => theme.colors.Gray.gray500};
  text-align: center;
`;
