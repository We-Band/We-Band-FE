import { useEffect, useCallback } from 'react';
import * as S from './Alert.styled';

interface AlertProps {
  onClose: () => void;
  message?: string;
}

const Alert = ({ onClose, message }: AlertProps) => {
  const stableOnClose = useCallback(onClose, []);

  useEffect(() => {
    const timer = setTimeout(stableOnClose, 3000); // 3초 후 닫기
    return () => clearTimeout(timer);
  }, [stableOnClose]);

  // 기본 메시지 표시
  if (!message) {
    return (
      <S.AlertContainer>
        <S.AlertTextGroup>
          <S.AlertText $highlight={true}>동아리 코드</S.AlertText>
          <S.AlertText $highlight={false}>가 클립보드에 저장되었어요!</S.AlertText>
        </S.AlertTextGroup>
        <S.AlertTextGroup>
          <S.AlertText $highlight={false}>코드를 통해 </S.AlertText>
          <S.AlertText $highlight={true}>동아리 부원들을 초대</S.AlertText>
          <S.AlertText $highlight={false}>해 보세요.</S.AlertText>
        </S.AlertTextGroup>
      </S.AlertContainer>
    );
  }

  // 커스텀 메시지 표시
  return (
    <S.AlertContainer>
      <S.AlertTextGroup>
        <S.AlertText $highlight={false}>{message}</S.AlertText>
      </S.AlertTextGroup>
    </S.AlertContainer>
  );
};

export default Alert;
