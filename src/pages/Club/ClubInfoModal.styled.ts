import styled from 'styled-components';
import colors from '../../styles/theme/colors';
import fontStyles from '../../styles/theme/typography';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 100%;
  margin: 0 21px;
  height: auto;
  padding: 36px 24px 20px 24px;
  background-color: ${colors.Gray.gray200};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalHeader = styled.div`
  text-align: center;
`;

export const ClubImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
`;

export const ClubImage = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 40px;
  background-color: #ccc;
`;

export const HeaderTitle = styled.h2`
  ${fontStyles.T02_Medium};
  color: ${colors.Gray.gray800};
  margin: 0;
`;

export const InfoContainer = styled.div`
  background-color: ${colors.Gray.gray50};
  padding: 12px 20px;
  border-radius: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoLabel = styled.div`
  ${fontStyles.S02_Medium}
  color: ${colors.Gray.gray500};
`;

export const InfoValue = styled.div`
  ${fontStyles.S02_Medium}
  color: ${colors.Gray.gray800};
  text-align: right;
`;

export const MemberSection = styled.div`
`;

export const SectionTitle = styled.h3`
  ${fontStyles.S02_Medium}
  margin-bottom: 8px;
  color: ${colors.Gray.gray500};
`;

export const MemberList = styled.div`
  background-color: ${colors.Gray.gray50};
  border-radius: 8px;
  padding: 12px 16px;
  height: 144px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  
  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.BlackAlpha[400]};
    border-radius: 3px;
  }
`;

export const MemberItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MemberName = styled.div`
  ${fontStyles.S02_Bold}
  color: ${colors.Gray.gray800};
  margin-left: 8px;
`;

export const LeaderIcon = styled.div`
  background-image: url('/src/assets/icons/crown.svg');
  width: 20px;
  height: 20px;
`;

export const MemberActions = styled.div`
  display: flex;
  gap: 12px;
`;

export const DotsButton = styled.div`
  background-image: url('/src/assets/icons/dots_small.svg');
  width: 20px;
  height: 20px;
  background-size: cover;
  cursor: pointer;
  position: relative;
  z-index: 110;
  flex-shrink: 0;
`;

export const ConfirmButton = styled.button`
  ${fontStyles.T02_Bold}
  width: 100%;
  padding: 16px;
  background-color: ${colors.WBOrange.wbo400};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

