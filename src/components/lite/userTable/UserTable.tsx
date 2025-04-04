import { parsePathToUserData } from '@utils/urlHandle';
import * as S from './UserTable.styled';
import { useLiteContext } from '@components/lite/LiteHome';

const UserTable = () => {
  const path = window.location.pathname;
  const userData = parsePathToUserData(path);
  const { selectedUser, setSelectedUser } = useLiteContext();

  return (
    <S.UserTableContainer>
      <S.UserButton
        $selected={!selectedUser}
        onClick={() => setSelectedUser('')}
      >
        전체보기
      </S.UserButton>
      {userData.map(({ name }, idx) => (
        <S.UserButton
          $selected={selectedUser === name}
          key={idx}
          onClick={() => setSelectedUser(name)}
        >
          {name}
        </S.UserButton>
      ))}
    </S.UserTableContainer>
  );
};

export default UserTable;
