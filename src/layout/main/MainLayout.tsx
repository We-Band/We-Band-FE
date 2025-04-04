import { Outlet } from 'react-router';
import * as S from './MainLayout.styled';

const MainLayout = () => {
  return (
    <S.MainLayoutContainer>
      <S.LogoContainer>
        <S.Logo />
      </S.LogoContainer>
      <Outlet />
    </S.MainLayoutContainer>
  );
};

export default MainLayout;
