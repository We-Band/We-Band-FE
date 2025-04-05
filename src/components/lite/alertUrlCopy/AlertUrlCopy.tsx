import { AlertCopyUrlLite } from '@icons/CopyUrl';
import * as S from './AlertUrlCopy.styled';
import { useState } from 'react';
import Alert from '@components/alert/Alert';
import { urlCopied } from '@constants/alert';

const AlertUrlCopy = () => {
  const url = window.location.href;
  const handleClick = () => {
    localStorage.setItem('alertCopyUrl', JSON.stringify(false));
    window.location.reload();
  };
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(['']);

  const handleCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
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
