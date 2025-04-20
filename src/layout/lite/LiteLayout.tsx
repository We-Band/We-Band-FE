import { Outlet } from 'react-router';
import * as S from './LiteLayout.styled';
import { useNavigate } from 'react-router-dom';
import LiteLogo from '@assets/logo/lite-logo.svg?react';

const LiteLayout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/lite`);
  };

  return (
    <S.LiteLayoutContainer>
      <S.LogoContainer>
        <LiteLogo onClick={handleClick} />
      </S.LogoContainer>
      <Outlet />
    </S.LiteLayoutContainer>
  );
};

export default LiteLayout;
