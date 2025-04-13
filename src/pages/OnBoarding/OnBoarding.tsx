import { OnboardingLogo } from '@icons/Logo';
import * as S from './OnBoarding.styled';
import KaKaoLogin from '@components/kakaoLogin/KakaoLogin';

const OnBoarding = () => {
  return (
    <S.OnboardingContainer>
      <S.OnboardingSection>
        <OnboardingLogo />
        <S.OnBoardingText>밴드가 만나는 시간을 더 즐겁게</S.OnBoardingText>
      </S.OnboardingSection>
      <KaKaoLogin />
    </S.OnboardingContainer>
  );
};

export default OnBoarding;
