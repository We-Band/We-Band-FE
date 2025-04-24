import { Outlet } from 'react-router';
import * as S from './MainLayout.styled';
import NavBar from './navBar/NavBar';

const MainLayout = () => {
  return (
    <S.MainLayoutContainer>
      <Outlet />
      <NavBar />
    </S.MainLayoutContainer>
  );
};

export default MainLayout;
