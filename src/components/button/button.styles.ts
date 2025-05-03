import styled, { css } from 'styled-components';
import colors from '../../styles/theme/colors';
import fontStyles from '../../styles/theme/typography';

export interface ButtonStyleProps {
  width?: string;
  buttonType?: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonStyleProps>`
  ${fontStyles.S02_Bold}
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '100%'};
  height: 36px;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }

  ${({ buttonType }) => {
    switch (buttonType) {
      case 'secondary':
        return css`
          background-color: ${colors.Gray.gray300};
          color: ${colors.Gray.gray800};
        `;
      case 'primary':
      default:
        return css`
          background-color: ${colors.WBOrange.wbo400};
          color: ${colors.BlackAndWhite.white};
        `;
    }
  }}
`;
