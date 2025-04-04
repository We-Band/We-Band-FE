import { AlertCopyUrlLite } from '@icons/CopyUrl';
import * as S from './AlertUrlCopy.styled';

const AlertUrlCopy = () => {
  const url = window.location.href;

  return (
    <S.AlertCopyUrlBackgroud>
      <S.AlertCopyUrlContainer>
        <S.AlertCopyUrlTitle>일정 저장 완료!</S.AlertCopyUrlTitle>
        <S.UrlContainer>
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
        <S.AlertUrlButton>확인</S.AlertUrlButton>
      </S.AlertCopyUrlContainer>
    </S.AlertCopyUrlBackgroud>
  );
};
export default AlertUrlCopy;
