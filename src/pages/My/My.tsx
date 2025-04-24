import { useAuthStore } from '@store/auth';
import * as S from './My.styled';

const My = () => {
  const { logout } = useAuthStore();

  return (
    <S.MyContainer>
      <h1>MyPage</h1>
    </S.MyContainer>
  );
};

export default My;
