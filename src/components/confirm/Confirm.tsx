import React from 'react';
import * as S from './Confirm.styled';
import Button from '../button';

export interface ConfirmProps {
  isOpen: boolean;
  title?: string;
  titleWithAccent?: React.ReactNode;
  description?: string;
  accentTitle?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonType?: 'primary' | 'secondary';
  cancelButtonType?: 'primary' | 'secondary';
}

const Confirm: React.FC<ConfirmProps> = ({
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
}) => {
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
            onClick={onConfirm}
          />
        </S.ButtonContainer>
      </S.ConfirmContainer>
    </S.ConfirmOverlay>
  );
};

export default Confirm;
