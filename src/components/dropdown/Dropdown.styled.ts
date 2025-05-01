import styled from 'styled-components';
import colors from '../../styles/theme/colors';
import fontStyles from '../../styles/theme/typography';

export const DropdownContainer = styled.div`
  position: absolute;
  width: 196px;
  top: 50px;
  right: 0px;
  background-color: ${colors.Gray.gray300};
  border-radius: 8px;
  padding: 8px;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  display: flex;
  width: 180px;
  height: 44px;
  padding: 12px 20px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: ${colors.Gray.gray100};
  ${fontStyles.B03}
  cursor: pointer;
  text-align: center;
  &:last-child {
    margin-bottom: 0;
  }
`;