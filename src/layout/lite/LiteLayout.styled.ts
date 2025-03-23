import styled from 'styled-components';
import litelogo from '@assets/logo/lite-logo.svg';

export const LiteLayoutContainer = styled.div``;

export const LiteLogo = styled.img.attrs({
  src: litelogo,
  alt: 'lite-logo',
})`
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;
