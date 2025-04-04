import { parsePathToUserData } from '@utils/urlHandle';
import * as S from './userTable.styled';
import { useContext, useState } from 'react';
import { LiteContext } from '../LiteHome';

const UserTable = () => {
  const path = window.location.pathname;
  const userData = parsePathToUserData(path);
  const { selectedUser, setSelectedUser } = useContext(LiteContext);

  return (
    <S.UserTableContainer>
      <S.UserButton>전체보기</S.UserButton>
      {userData.map(({ name }, idx) => (
        <S.UserButton key={idx} onClick={() => setSelectedUser(name)}>
          {name}
        </S.UserButton>
      ))}
    </S.UserTableContainer>
  );
};

export default UserTable;
