import * as S from './Home.styled';
import { useAuthStore } from '@store/auth';

const Home = () => {
  const { logout } = useAuthStore();

  return (
    <S.HomeContainer>
      <h1>캘린더 홈</h1>
      <button onClick={logout}>로그아웃</button>
    </S.HomeContainer>
  );
};

export default Home;
