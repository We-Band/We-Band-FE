import React from 'react';
import * as S from './button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType?: 'primary' | 'secondary';
  width?: string;
}

/**
 * 공통 버튼 컴포넌트
 * @param {string} text - 버튼에 표시할 텍스트
 * @param {string} buttonType - 버튼 타입 ('primary' | 'secondary')
 * @param {string} width - 버튼 너비 (기본값: '100%')
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - 기타 버튼 속성들
 */
const Button: React.FC<ButtonProps> = ({ 
  text, 
  buttonType = 'primary', 
  width, 
  ...props 
}) => {
  return (
    <S.Button 
      buttonType={buttonType} 
      width={width} 
      {...props}
    >
      {text}
    </S.Button>
  );
};

export default Button;
