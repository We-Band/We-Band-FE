import DatePicker from './DatePicker';
import * as S from './OnBoardingLite.styled';

const OnBoardingLite: React.FC = () => {
  return (
    <S.OnBoardingLiteContainer>
      <S.InstructionsContainer>
        <S.InstructionsHeader>
          몇 월 며칠을 기준으로 <br /> 시간 약속을 잡으시겠어요?
        </S.InstructionsHeader>
        <S.InstructionsText>
          위밴드는 일주일 단위로 시간 설정이 가능해요.
        </S.InstructionsText>
      </S.InstructionsContainer>
      <DatePicker />
      <S.MakeScheduleButton>시간 약속 만들기</S.MakeScheduleButton>
    </S.OnBoardingLiteContainer>
  );
};

export default OnBoardingLite;
