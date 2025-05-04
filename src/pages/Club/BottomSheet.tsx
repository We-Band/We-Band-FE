import React, { useState, useCallback } from 'react';
import * as S from './BottomSheet.styled';
import Dropdown, { DropdownOption } from '../../components/dropdown/Dropdown';
import Alert from '../../components/alert/Alert';
import ClubInfoModal from './ClubInfoModal';
import Confirm from '../../components/confirm/Confirm';
import { AccentText } from '../../components/confirm/Confirm.styled';

interface Club {
  id: number;
  name: string;
  leader: string;
  members: number;
}

interface ClubListItemProps {
  club: Club;
  showAlertMessage: () => void;
  showClubInfo: (clubId: number) => void;
}

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

// 16자리 난수 생성 함수
const generateClubCode = (): string => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 16; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

// 앱 URL 생성 (아직 개발 중이라면 임시로 넣어둔 값)
const getAppUrl = (): string => {
  return 'https://weband.co.kr/club/join';
};

// 코드 복사 형식 생성
const generateClubInviteText = (clubName: string, clubCode: string): string => {
  const appUrl = getAppUrl();
  return `${clubName}의 동아리 코드예요!\n동아리를 추가해 동아리 활동에 참여해보세요.\n${clubCode}\n${appUrl}`;
};

// 샘플 클럽 데이터
const CLUBS: Club[] = [
  { id: 1, name: "위밴드 1기", leader: "정유진", members: 8 },
  { id: 2, name: "낭만청춘사랑", leader: "박성진", members: 3 },
  { id: 3, name: "크루거", leader: "김서수", members: 5 },
  { id: 4, name: "다이나믹", leader: "유지훈", members: 4 },
  { id: 5, name: "반달", leader: "현도윤", members: 6 },
  { id: 6, name: "모닝글로리", leader: "김민준", members: 7 }
];

const ClubListItem: React.FC<ClubListItemProps> = ({ club, showAlertMessage, showClubInfo }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const handleToggleOptions = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  };

  function renderLeaveModal() {
    if (!showLeaveModal) return null;

    const titleWithAccent = (
      <>
        정말 <AccentText>{club.name}</AccentText> 동아리를<br />탈퇴하시겠어요?
      </>
    );

    return (
      <Confirm
        isOpen={showLeaveModal}
        titleWithAccent={titleWithAccent}
        description="동아리를 탈퇴한 후에는 초대코드를 입력해 동아리에 다시 가입할 수 있어요."
        confirmText="탈퇴하기"
        cancelText="취소하기"
        onConfirm={() => {
          // 실제 API 호출 코드로 대체할 부분
          console.log(`${club.name} 동아리 탈퇴 완료`);
          setShowLeaveModal(false);
          // 임시로 성공 처리
          alert(`${club.name} 동아리에서 탈퇴했습니다.`);
        }}
        onCancel={() => setShowLeaveModal(false)}
      />
    );
  }

  const getClubOptions = (club: Club): DropdownOption[] => {
    return [
      {
        id: 'copy-code',
        label: '동아리 코드 복사하기',
        onClick: (e: React.MouseEvent) => {
          // 16자리 동아리 코드 생성
          const clubCode = generateClubCode();
          
          // 복사할 텍스트 생성
          const textToCopy = generateClubInviteText(club.name, clubCode);
          
          try {
            // 클립보드 API를 직접 사용
            navigator.clipboard.writeText(textToCopy)
              .then(() => {
                console.log('클립보드에 복사 성공');
                showAlertMessage();
              })
              .catch(err => {
                console.error('클립보드 복사 실패:', err);
                showAlertMessage();
              });
          } catch (error) {
            console.error('클립보드 작업 중 오류:', error);
            showAlertMessage();
          }
        }
      },
      {
        id: 'view-info',
        label: '동아리 정보 보기',
        onClick: (e: React.MouseEvent) => {
          setShowOptions(false); // 옵션 메뉴 닫기
          showClubInfo(club.id);
        }
      },
      {
        id: 'leave-club',
        label: '동아리 탈퇴하기',
        onClick: (e: React.MouseEvent) => {
          setShowOptions(false); // 옵션 메뉴 닫기
          setShowLeaveModal(true);
        }
      }
    ];
  };

  return (
    <S.ClubListItemContainer onClick={(e) => e.stopPropagation()}>
      <S.ClubImage />
      <S.ClubInfoContainer>
        <S.ClubName>{club.name}</S.ClubName>
        <S.ClubInfo>{club.leader}, 멤버 {club.members}명</S.ClubInfo>
      </S.ClubInfoContainer>
      <div style={{ position: 'relative' }}>
        <S.DotsButton onClick={handleToggleOptions} />
        {showOptions && (
          <Dropdown
            options={getClubOptions(club)}
            onClose={() => setShowOptions(false)}
          />
        )}
      </div>
      {renderLeaveModal()}
    </S.ClubListItemContainer>
  );
};

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showClubInfoModal, setShowClubInfoModal] = useState(false);
  const [selectedClubId, setSelectedClubId] = useState<number | null>(null);

  const showAlertMessage = useCallback(() => {
    console.log('알림 메시지 표시 요청');
    setShowAlert(true);
  }, []);

  const handleCloseAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  const handleShowClubInfo = useCallback((clubId: number) => {
    setSelectedClubId(clubId);
    setShowClubInfoModal(true);
  }, []);

  const handleCloseClubInfoModal = useCallback(() => {
    setShowClubInfoModal(false);
  }, []);

  const handleAddClub = () => {
    console.log('Add new club');
    // 동아리 추가 기능
  };

  if (!isOpen) return null;

  return (
    <>
      {showAlert && (
        <div style={{ position: 'fixed', bottom: '90px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
          <Alert onClose={handleCloseAlert} />
        </div>
      )}
      
      {selectedClubId !== null && (
        <ClubInfoModal
          isOpen={showClubInfoModal}
          onClose={handleCloseClubInfoModal}
          clubId={1} // {selectedClubId}
        />
      )}
      
      <S.BottomSheetOverlay onClick={onClose}>
        <S.BottomSheetContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          <S.TitleContainer>
            <S.BottomSheetTitle>동아리 목록</S.BottomSheetTitle>
            <S.AddButton onClick={handleAddClub} />
          </S.TitleContainer>
          <S.ClubListContainer>
            {CLUBS.map(club => (
              <ClubListItem 
                key={club.id}
                club={club}
                showAlertMessage={showAlertMessage}
                showClubInfo={handleShowClubInfo}
              />
            ))}
          </S.ClubListContainer>
        </S.BottomSheetContent>
      </S.BottomSheetOverlay>
    </>
  );
};

export default BottomSheet; 