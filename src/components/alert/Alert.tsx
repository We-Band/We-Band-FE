import { useEffect, useCallback } from 'react';
import * as S from './Alert.styled';

const Alert = ({ onClose }: { onClose: () => void }) => {
  const stableOnClose = useCallback(onClose, []);

  useEffect(() => {
    const timer = setTimeout(stableOnClose, 3000); // 3초 후 닫기
    return () => clearTimeout(timer);
  }, [stableOnClose]);

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
};

export default Alert;
