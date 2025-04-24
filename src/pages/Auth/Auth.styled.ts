import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const AuthSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-bottom: 50%;
`;

export const AuthText = styled.p`
  ${({ theme }) => theme.fontStyles.S02_Medium}
  color: ${({ theme }) => theme.colors.Gray.gray800}
`;
