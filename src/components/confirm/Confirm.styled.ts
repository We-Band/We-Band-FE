import styled from 'styled-components';
import colors from '../../styles/theme/colors';
import fontStyles from '../../styles/theme/typography';

export const ConfirmOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ConfirmContainer = styled.div`
  width: 100%;
  max-width: 340px;
  background-color: ${colors.Gray.gray50};
  border-radius: 12px;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 0 31px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;
`;

interface TitleProps {
  accent?: boolean;
}

export const Title = styled.h2<TitleProps>`
  ${fontStyles.T03_Bold}
  color: ${props => props.accent ? colors.WBOrange.wbo500 : colors.Gray.gray800};
  white-space: pre-line;
`;

export const AccentText = styled.span`
  color: ${colors.WBOrange.wbo500};
  white-space: pre-line;
`;

export const Description = styled.p`
  ${fontStyles.B01}
  color: ${colors.Gray.gray500};
  margin: 0;
  white-space: pre-line;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 100%;
`;
