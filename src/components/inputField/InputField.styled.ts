import styled, { css } from 'styled-components';
import colors from '../../styles/theme/colors';
import fontStyles from '../../styles/theme/typography';

interface InputContainerProps {
  width: string;
  hasValue: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  background-color: ${colors.Gray.gray100};
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;
  
  &:focus-within {
    border: 1px solid ${colors.Gray.gray400};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  background-color: transparent;
  border: none;
  outline: none;
  ${fontStyles.S02_Medium}
  color: ${colors.Gray.gray600};
  
  &::placeholder {
    color: ${colors.Gray.gray400};
    ${fontStyles.S02_Medium}
  }
`;

export const PenIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('/src/assets/icons/pen-line-gray.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 12px;
  pointer-events: none;
`;
