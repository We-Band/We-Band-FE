import styled from 'styled-components';
import webandlogo from '@assets/logo/we-band-logo.svg';

export const MainLayoutContainer = styled.div``;

export const Logo = styled.img.attrs({
  src: webandlogo,
  alt: 'we-band-logo',
})`
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;
