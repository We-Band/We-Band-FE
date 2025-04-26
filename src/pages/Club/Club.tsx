import { useAuthStore } from '@store/auth';
import * as S from './Club.styled';

const Club = () => {
  const { logout } = useAuthStore();

  return (
    <S.ClubContainer>
      <h1>ClubPage</h1>
    </S.ClubContainer>
  );
};

export default Club;
