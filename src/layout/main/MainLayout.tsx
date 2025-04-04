import { Outlet } from 'react-router';
import * as S from './MainLayout.styled';
import Logo from '@assets/logo/we-band-logo.svg?react';

const MainLayout = () => {
  return (
    <S.MainLayoutContainer>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <Outlet />
    </S.MainLayoutContainer>
  );
};

export default MainLayout;
