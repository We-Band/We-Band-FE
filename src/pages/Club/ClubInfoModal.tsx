import React, { useEffect, useState } from 'react';
import * as S from './ClubInfoModal.styled';
import Dropdown, { DropdownOption } from '../../components/dropdown/Dropdown';
import Button from '../../components/button';

interface ClubMember {
  id: string;
  name: string;
  isLeader?: boolean;
}

interface ClubInfo {
  name: string;
  createdAt: string;
  memberCount: number;
  clubCode: string;
  members: ClubMember[];
}

interface ClubInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubId: number;
}

const ClubInfoModal: React.FC<ClubInfoModalProps> = ({
  isOpen,
  onClose,
  clubId
}) => {
  const [clubInfo, setClubInfo] = useState<ClubInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeMemberDropdown, setActiveMemberDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && clubId) {
      fetchClubInfo(clubId);
    }
  }, [isOpen, clubId]);

  const fetchClubInfo = async (id: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // const response = await fetch(`/api/clubs/${id}`);
      // const data = await response.json();
      
      const mockData = await getMockClubInfo(id);
      setClubInfo(mockData);
    } catch (err) {
      console.error('Failed to fetch club info:', err);
      setError('클럽 정보를 불러오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  // 목업 데이터 생성 함수 (실제 API 구현 시 제거)
  const getMockClubInfo = (id: number): Promise<ClubInfo> => {
    return new Promise((resolve) => {
      // 샘플 데이터
      const mockClubs: Record<number, ClubInfo> = {
        1: {
          name: '위밴드 1기',
          createdAt: '2025.03.23.',
          memberCount: 24,
          clubCode: 'HAPPYBIRTHDAY',
          members: [
            { id: '1', name: '홍길동', isLeader: true },
            { id: '2', name: '이순신' },
            { id: '3', name: '임꺽정' },
            { id: '4', name: '김유신' },
            { id: '5', name: '가나다라' }, 
            { id: '6', name: 'aslkjelkfjls' }, 
          ]
        },
      };
      
      // 딜레이를 주어 API 호출 시뮬레이션
      setTimeout(() => {
        resolve(mockClubs[id] || {
          name: '알 수 없는 동아리',
          createdAt: '-',
          memberCount: 0,
          clubCode: '-',
          members: []
        });
      }, 300);
    });
  };

  const handleDotsClick = (e: React.MouseEvent, memberId: string) => {
    e.stopPropagation();
    setActiveMemberDropdown(activeMemberDropdown === memberId ? null : memberId);
  };

  const handleCloseDropdown = () => {
    setActiveMemberDropdown(null);
  };

  const getMemberOptions = (memberName: string): DropdownOption[] => {
    return [
      {
        id: 'view-schedule',
        label: '멤버 일정 보기',
        onClick: (e) => {
          e.stopPropagation();
          console.log(`${memberName}의 일정 보기`);
          handleCloseDropdown();
        }
      },
    ];
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.HeaderTitle>동아리 정보</S.HeaderTitle>
        </S.ModalHeader>
        
        {isLoading ? (
          <div style={{ padding: '24px', textAlign: 'center' }}>로딩 중...</div>
        ) : error ? (
          <div style={{ padding: '24px', textAlign: 'center', color: 'red' }}>{error}</div>
        ) : clubInfo ? (
          <>
            <S.ClubImageContainer>
              <S.ClubImage />
            </S.ClubImageContainer>
            
            <S.InfoContainer>
              <S.InfoRow>
                <S.InfoLabel>동아리 이름</S.InfoLabel>
                <S.InfoValue>{clubInfo.name}</S.InfoValue>
              </S.InfoRow>
              <S.InfoRow>
                <S.InfoLabel>개설일자</S.InfoLabel>
                <S.InfoValue>{clubInfo.createdAt}</S.InfoValue>
              </S.InfoRow>
              <S.InfoRow>
                <S.InfoLabel>멤버수</S.InfoLabel>
                <S.InfoValue>{clubInfo.memberCount}명</S.InfoValue>
              </S.InfoRow>
              <S.InfoRow>
                <S.InfoLabel>동아리 코드</S.InfoLabel>
                <S.InfoValue>{clubInfo.clubCode}</S.InfoValue>
              </S.InfoRow>
            </S.InfoContainer>
            
            <S.MemberSection>
              <S.SectionTitle>동아리 멤버</S.SectionTitle>
              <S.MemberList>
                {clubInfo.members.map((member) => (
                  <S.MemberItem key={member.id}>
                    <S.MemberInfo>
                      <S.MemberName>
                        {member.name}
                      </S.MemberName>
                      {member.isLeader && <S.LeaderIcon />}
                    </S.MemberInfo>
                    <S.MemberActions>
                      <div style={{ position: 'relative' }}>
                        <S.DotsButton onClick={(e) => handleDotsClick(e, member.id)} />
                        {activeMemberDropdown === member.id && (
                          <Dropdown 
                            options={getMemberOptions(member.name)} 
                            onClose={handleCloseDropdown} 
                            position={{
                              top: '24px',
                              right: '0px'
                            }}
                          />
                        )}
                      </div>
                    </S.MemberActions>
                  </S.MemberItem>
                ))}
              </S.MemberList>
            </S.MemberSection>
            <S.ButtonContainer>
              <Button 
                text="확인" 
                buttonType="primary" 
                width='160px'
                onClick={onClose} 
              />
            </S.ButtonContainer>
          </>
        ) : (
          <div style={{ padding: '24px', textAlign: 'center' }}>데이터가 없습니다.</div>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default ClubInfoModal;
