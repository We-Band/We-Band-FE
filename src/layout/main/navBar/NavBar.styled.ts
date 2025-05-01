import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 37px 28px 37px;
  justify-content: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0px;
  z-index: 1000;

  border-radius: 16px 16px 0px 0px;
  background: ${({ theme }) => theme.colors.Gray.gray100};
`;
