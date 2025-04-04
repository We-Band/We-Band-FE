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

// Add User
export const UserNameInputContainer = styled.div`
  background: ${({ theme }) => theme.colors.Gray.gray100};

  display: flex;
  width: 210px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  border-radius: 8px;
  padding: 12px 20px;
`;

export const UserNameInput = styled.input`
  color: ${({ theme }) => theme.colors.Gray.gray700};
  background: ${({ theme }) => theme.colors.Gray.gray100};
  width: 150px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.Gray.gray400};
  }
`;

export const AddUserButton = styled.button`
  ${({ theme }) => theme.fontStyles.S02_Bold}
  background: ${({ theme }) => theme.colors.WBOrange.wbo400};
  color: ${({ theme }) => theme.colors.Gray.gray50};

  display: flex;
  align-items: center;

  gap: 4px;
  padding: 8px 12px;
  border-radius: 4px;
`;

export const CancleButton = styled.button`
  ${({ theme }) => theme.fontStyles.S02_Bold}
  background: ${({ theme }) => theme.colors.Gray.gray300};
  color: ${({ theme }) => theme.colors.Gray.gray600};

  display: flex;
  align-items: center;

  gap: 4px;
  padding: 8px 12px;
  border-radius: 4px;
`;
