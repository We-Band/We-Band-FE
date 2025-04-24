import OnBoarding from '@pages/OnBoarding/OnBoarding';
import * as S from './Home.styled';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { postKakaoLogin } from '@api/auth';
import { useAuthStore } from '@store/auth';
import NavBar from '@layout/main/navBar/NavBar';

const Home = () => {
  const login = useAuthStore((state) => state.login);
  const { isLoggedIn, logout } = useAuthStore();
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
    <S.HomeContainer>
      {!isLoggedIn ? (
        <OnBoarding />
      ) : (
        <>
          <h1>HOME</h1>
          <button onClick={logout}>로그아웃</button>
          <NavBar />
        </>
      )}
    </S.HomeContainer>
  );
};

export default Home;
