import React, { useState } from 'react';
import * as S from './Confirm.styled';
import Button from '../button';
import InputField from '../inputField/InputField';


export interface ConfirmInputProps {
  isOpen: boolean;
  title?: string;
  titleWithAccent?: React.ReactNode;
  description?: string;
  accentTitle?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm: (inputValue: string) => void;
  onCancel: () => void;
  confirmButtonType?: 'primary' | 'secondary';
  cancelButtonType?: 'primary' | 'secondary';
  placeholder?: string;
  maxLength?: number;
}

const ConfirmInput: React.FC<ConfirmInputProps> = ({
  isOpen,
  title,
  titleWithAccent,
  description,
  accentTitle = false,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
  confirmButtonType = 'primary',
  cancelButtonType = 'secondary',
  placeholder = '입력해주세요',
  maxLength,
}) => {
  const [inputValue, setInputValue] = useState('');

  if (!isOpen) return null;

  return (
    <S.ConfirmOverlay onClick={onCancel}>
      <S.ConfirmContainer onClick={(e) => e.stopPropagation()}>
        <S.ContentContainer>
          {titleWithAccent ? (
            <S.Title accent={false}>{titleWithAccent}</S.Title>
          ) : (
            <S.Title accent={accentTitle}>{title}</S.Title>
          )}
          {description && <S.Description>{description}</S.Description>}
        </S.ContentContainer>

        <div>
          <InputField 
            width="100%"
            showPenIcon={false} 
            placeholder={placeholder}
            onChange={(value) => {
              // maxLength 제한 적용
              if (maxLength && value.length > maxLength) {
                setInputValue(value.slice(0, maxLength));
              } else {
                setInputValue(value);
              }
            }}
          />
        </div>
        
        <S.ButtonContainer>
          <Button
            text={cancelText}
            buttonType={cancelButtonType}
            width="120px"
            onClick={onCancel}
          />
          <Button
            text={confirmText}
            buttonType={confirmButtonType}
            width="120px"
            onClick={() => onConfirm(inputValue)}
          />
        </S.ButtonContainer>
      </S.ConfirmContainer>
    </S.ConfirmOverlay>
  );
};

export default ConfirmInput;
