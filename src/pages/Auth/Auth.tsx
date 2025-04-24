import { postKakaoLogin } from '@api/auth';
import { OnboardingLogo } from '@icons/Logo';
import * as S from './Auth.styled';
import { useAuthStore } from '@store/auth';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LoadingOnboarding } from '@icons/Loading';

const Auth = () => {
  const login = useAuthStore((state) => state.login);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');
    console.log(code);

    if (code) {
      postKakaoLogin(code)
        .then((data) => {
          if (data) {
            login(data.access_token);
            localStorage.setItem('refreshToken', data.refresh_token);
            navigate('/');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [searchParams, navigate]);

  return (
    <S.AuthContainer>
      <S.AuthSection>
        <OnboardingLogo />
        <LoadingOnboarding />
        <S.AuthText>로그인 중입니다...</S.AuthText>
      </S.AuthSection>
    </S.AuthContainer>
  );
};

export default Auth;
