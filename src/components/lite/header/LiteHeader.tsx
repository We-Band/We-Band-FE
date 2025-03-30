import * as S from './LiteHeader.styled';
import { CopyUrlLite } from '@icons/CopyUrl';
import AddIcon from '@assets/icons/add.svg?react';
import { ArrowDownPickUser } from '@icons/Arrows';

const LiteHeader: React.FC = () => {
  return (
    <S.LiteHeaderContainer>
      <CopyUrlLite />
      <S.UserContainer>
        <S.AddUserContainer>
          <S.AddUserText>인원 추가</S.AddUserText>
          <AddIcon />
        </S.AddUserContainer>
        <S.PickUserContainer>
          <S.PickUserText>현재 인원</S.PickUserText>
          <ArrowDownPickUser />
        </S.PickUserContainer>
      </S.UserContainer>
    </S.LiteHeaderContainer>
  );
};

export default LiteHeader;
