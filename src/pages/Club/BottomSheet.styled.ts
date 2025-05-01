import styled from 'styled-components';
import colors from '../../styles/theme/colors';
import fontStyles from '../../styles/theme/typography';

export const BottomSheetOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
`;

export const BottomSheetContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 432px;
  padding: 24px 21px;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px 16px 0px 0px;
  background-color: ${colors.Gray.gray50};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
`;

export const AddButton = styled.div`
  background-image: url('/src/assets/icons/add-gray.svg');
  width: 24px;
  height: 24px;
  background-size: cover;
  cursor: pointer;
`;

export const ClubListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 238px;
  overflow-y: auto;
`;

export const BottomSheetTitle = styled.div`
  color: ${colors.Gray.gray600};
  ${fontStyles.T02_Bold}
`; 

export const ClubListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  gap: 20px;
  width: 100%;
  height: 80px;
  background: ${colors.Gray.gray100};
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const ClubImage = styled.div`
  width: 56px;
  height: 56px;
  background-color: #ccc;
  border-radius: 28px;
`;

export const ClubInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DotsButton = styled.div`
  background-image: url('/src/assets/icons/dots.svg');
  width: 24px;
  height: 48px;
  background-size: cover;
  margin-left: auto;
  cursor: pointer;
  position: relative;
  z-index: 110;
`;

export const ClubName = styled.div`
  ${fontStyles.T02_Bold}
  color: ${colors.Gray.gray800};
`;

export const ClubInfo = styled.div`
  ${fontStyles.T01_Medium}
  color: ${colors.Gray.gray600};
`;