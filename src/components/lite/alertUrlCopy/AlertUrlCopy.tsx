import { AlertCopyUrlLite } from '@icons/CopyUrl';
import * as S from './AlertUrlCopy.styled';
import { useState } from 'react';
import Alert from '@components/alert/Alert';
import { urlCopied } from '@constants/alert';
import { useNavigate } from 'react-router-dom';

interface AlertUrlCopyProps {
  url: string;
}

const AlertUrlCopy = ({ url }: AlertUrlCopyProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(['']);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setAlert(true);
        setAlertMessage(urlCopied);
      })
      .catch((err) => {
        console.error('Error copying text: ', err);
      });
  };

  return (
    <S.AlertCopyUrlBackgroud>
      {alert && (
        <Alert messages={alertMessage} onClose={() => setAlert(false)} />
      )}

      <S.AlertCopyUrlContainer>
        <S.AlertCopyUrlTitle>일정 저장 완료!</S.AlertCopyUrlTitle>
        <S.UrlContainer onClick={handleCopy}>
          <S.UrlText>{url}</S.UrlText>
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
