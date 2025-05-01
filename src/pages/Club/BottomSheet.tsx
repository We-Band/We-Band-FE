import React from 'react';

import * as S from './BottomSheet.styled';

interface ClubListItemProps {
  name: string;
  leader: string;
  members: number;
}

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClubListItem: React.FC<ClubListItemProps> = ({ name, leader, members }) => {
  return (
    <S.ClubListItemContainer>
      <S.ClubImage />
      <S.ClubInfoContainer>
        <S.ClubName>{name}</S.ClubName>
        <S.ClubInfo>{leader}, 멤버 {members}명</S.ClubInfo>
      </S.ClubInfoContainer>
      <S.DotsButton />
    </S.ClubListItemContainer>
  );
};

function BottomSheet({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const handleAddClub = () => {
    console.log('Add new club');
    // 동아리 추가 기능
  };

  return (
    <S.BottomSheetOverlay onClick={onClose}>
      <S.BottomSheetContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <S.TitleContainer>
          <S.BottomSheetTitle>동아리 목록</S.BottomSheetTitle>
          <S.AddButton onClick={handleAddClub} />
        </S.TitleContainer>
        <S.ClubListContainer>
          <ClubListItem name="위밴드 1기" leader="정유진" members={8} />
          <ClubListItem name="낭만청춘사랑" leader="박성진" members={3} />
          <ClubListItem name="크루거" leader="김서수" members={5} />
          <ClubListItem name="다이나믹" leader="유지훈" members={4} />
          <ClubListItem name="반달" leader="현도윤" members={6} />
          <ClubListItem name="모닝글로리" leader="김민준" members={7} />
        </S.ClubListContainer>
      </S.BottomSheetContent>
    </S.BottomSheetOverlay>
  );
};

export default BottomSheet; 