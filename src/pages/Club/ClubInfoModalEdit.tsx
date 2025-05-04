import React, { useEffect, useState } from 'react';
import * as S from './ClubInfoModal.styled';
import Dropdown, { DropdownOption } from '../../components/dropdown/Dropdown';
import Button from '../../components/button';
import InputField from '../../components/inputField/InputField';

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

function ClubInfoModalEdit({ isOpen, onClose, clubId }: ClubInfoModalProps) {
  const [clubInfo, setClubInfo] = useState<ClubInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLeader, setIsLeader] = useState(false);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [clubName, setClubName] = useState('');

  useEffect(() => {
    if (isOpen && clubId) {
      fetchClubInfo(clubId);
      checkLeaderStatus(clubId);
    }
  }, [isOpen, clubId]);

  // 리더인지 확인하는 API 호출 (나중에 실제 API로 대체)
  async function checkLeaderStatus(clubId: number) {
    try {
      // 실제 API 호출 (예시)
      // const response = await fetch(`/api/clubs/${clubId}/check-leader-status`);
      // const data = await response.json();
      // setIsLeader(data.isLeader);
      
      // 목업 데이터 (테스트용)
      // 실제 구현 시 이 부분을 삭제하고 위의 주석 처리된 API 호출 코드를 사용
      const mockIsLeader = clubId === 1; // 테스트를 위해 clubId가 1이면 리더로 설정
      setIsLeader(mockIsLeader);
    } catch (err) {
      console.error('Failed to check leader status:', err);
      setIsLeader(false); // 에러 발생 시 기본적으로 리더가 아닌 것으로 설정
    }
  }

  async function fetchClubInfo(id: number) {
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
  }

  // 목업 데이터 생성 함수 (실제 API 구현 시 제거)
  function getMockClubInfo(id: number): Promise<ClubInfo> {
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
        const clubData = mockClubs[id] || {
          name: '알 수 없는 동아리',
          createdAt: '-',
          memberCount: 0,
          clubCode: '-',
          members: []
        };
        
        setClubName(clubData.name);
        resolve(clubData);
      }, 300);
    });
  }

  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.HeaderTitle>동아리 정보 수정하기</S.HeaderTitle>
        </S.ModalHeader>
        
        {isLoading ? (
          <div style={{ padding: '24px', textAlign: 'center' }}>로딩 중...</div>
        ) : error ? (
          <div style={{ padding: '24px', textAlign: 'center', color: 'red' }}>{error}</div>
        ) : clubInfo ? (
          <>
            <S.ClubImageContainer>
              <S.ClubImage />
                <S.PhotoEditButton 
                  onClick={() => console.log('사진 변경')} 
                />
            </S.ClubImageContainer>
            
            <S.InfoContainer>
              <S.InfoRowEdit>
                <S.InfoLabel>동아리 이름</S.InfoLabel>
                <div style={{ flex: 1 }}>
                  <InputField 
                    defaultValue={clubName} 
                    showPenIcon={true} 
                    placeholder="이름을 입력해 주세요." 
                    onChange={(value) => setClubName(value)}
                  />
                </div>
              </S.InfoRowEdit>
              <S.InfoRowEdit>
                <S.InfoLabel>개설일자</S.InfoLabel>
                <S.InfoValue>{clubInfo.createdAt}</S.InfoValue>
              </S.InfoRowEdit>
              <S.InfoRowEdit>
                <S.InfoLabel>멤버수</S.InfoLabel>
                <S.InfoValue>{clubInfo.memberCount}명</S.InfoValue>
              </S.InfoRowEdit>
              <S.InfoRowEdit>
                <S.InfoLabel>동아리 코드</S.InfoLabel>
                <div style={{ flex: 1 }}>
                  <InputField 
                    defaultValue={clubInfo.clubCode} 
                    showPenIcon={true} 
                    placeholder="코드를 입력해 주세요." 
                    onChange={(value) => console.log('코드 변경:', value)}
                  />
                </div>
              </S.InfoRowEdit>
            </S.InfoContainer>
            
            <S.ButtonContainer>
              <Button 
                text="취소하기" 
                buttonType="secondary" 
                width='140px'
                onClick={onClose} 
              />
              <Button 
                text="수정하기" 
                buttonType="primary" 
                width='140px'
                onClick={() => {
                  console.log('수정 완료:', { clubName });
                  onClose();
                }} 
              />
            </S.ButtonContainer>
          </>
        ) : (
          <div style={{ padding: '24px', textAlign: 'center' }}>데이터가 없습니다.</div>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
}

export default ClubInfoModalEdit;
