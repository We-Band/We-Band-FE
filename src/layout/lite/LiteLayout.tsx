import { Outlet } from 'react-router';
import * as S from './LiteLayout.styled';
import { useNavigate } from 'react-router-dom';
import LiteLogo from '@assets/logo/lite-logo.svg?react';
import FooterLogo from '@assets/logo/footer-logo.svg?react';

const LiteLayout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/lite`);
  };

  return (
    <S.LiteLayoutContainer>
      <S.LogoContainer>
        <S.LogoPadding />
        <LiteLogo onClick={handleClick} />
      </S.LogoContainer>

      <S.MainContentContainer>
        <Outlet />
      </S.MainContentContainer>

      <S.FooterBackground>
        <S.FooterContainer>
          <FooterLogo />
          <S.FooterLinkContainer>
            <S.FooterLink
              href="https://glacier-borogovia-7b5.notion.site/We-Band-Lite-1ccdf3d703f28039b961c72d95d691d3"
              target="_blank"
            >
              WeBand 더 알아보기
            </S.FooterLink>
            <S.FooterLink
              href="mailto:qktjwl123@gmail.com?subject=WeBand 관련 문의드립니다."
              target="_blank"
            >
              문의 및 버그제보
            </S.FooterLink>
          </S.FooterLinkContainer>
        </S.FooterContainer>
      </S.FooterBackground>
    </S.LiteLayoutContainer>
  );
};

export default LiteLayout;
