import { Outlet } from 'react-router';
import * as S from './LiteLayout.styled';
import { useNavigate } from 'react-router-dom';

const LiteLayout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/lite`);
  };

  return (
    <S.LiteLayoutContainer>
      <S.LogoContainer>
        <S.LiteLogo onClick={handleClick} />
      </S.LogoContainer>
      <Outlet />
    </S.LiteLayoutContainer>
  );
};

export default LiteLayout;
