import { AlertCopyUrlLite } from '@icons/CopyUrl';
import * as S from './AlertUrlCopy.styled';
import { useEffect } from 'react';
import { URLCOPIED } from '@constants/alert';
import { useNavigate } from 'react-router-dom';
import useAlertStore from '@store/alert';

interface AlertUrlCopyProps {
  url: string;
}

const AlertUrlCopy = ({ url }: AlertUrlCopyProps) => {
  const navigate = useNavigate();
  const domain = window.location.host;

  const handleClick = () => {
    navigate(url);
  };

  const setAlert = useAlertStore((state) => state.setAlert);
  const setAlertMessage = useAlertStore((state) => state.setAlertMessage);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(domain + url)
      .then(() => {
        setAlert(true);
        setAlertMessage(URLCOPIED);
      })
      .catch((err) => {
        console.error('Error copying text: ', err);
      });
  };

  useEffect(() => {
    handleCopy();
  }, []);

  return (
    <S.AlertCopyUrlBackgroud>
      <S.AlertCopyUrlContainer>
        <S.AlertCopyUrlTitle>일정 저장 완료!</S.AlertCopyUrlTitle>
        <S.UrlContainer onClick={handleCopy}>
          <S.UrlText>{domain + url}</S.UrlText>
          <AlertCopyUrlLite />
        </S.UrlContainer>
        <S.UrlInstructionContainer>
          <S.UrlInstruction>변경 사항은 URL에 저장됩니다.</S.UrlInstruction>
          <S.UrlInstruction>
            <S.UrlInstructionSpan>
              URL을 복사해 일정을 공유
            </S.UrlInstructionSpan>
            해 보세요!
          </S.UrlInstruction>
        </S.UrlInstructionContainer>
        <S.AlertUrlButton onClick={handleClick}>확인</S.AlertUrlButton>
      </S.AlertCopyUrlContainer>
    </S.AlertCopyUrlBackgroud>
  );
};
export default AlertUrlCopy;
