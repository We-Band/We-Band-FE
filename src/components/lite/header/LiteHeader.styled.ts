import styled from 'styled-components';

export const LiteHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  padding: 12px 32px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;

  gap: 8px;
`;

export const AddUserContainer = styled.div`
  background: ${({ theme }) => theme.colors.Gray.gray200};
  display: flex;
  align-items: center;

  padding: 4px 4px 4px 8px;
  gap: 4px;
  border-radius: 4px;
`;

export const AddUserText = styled.h6`
  ${({ theme }) => theme.fontStyles.S03_Bold};
  color: ${({ theme }) => theme.colors.Gray.gray500};
`;

export const PickUserContainer = styled(AddUserContainer)`
  background: ${({ theme }) => theme.colors.BlackAndWhite.white};
  gap: 16px;
`;

export const PickUserText = styled.h6`
  ${({ theme }) => theme.fontStyles.T01_Bold};
  color: ${({ theme }) => theme.colors.Gray.gray600};
`;
