import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: absolute;
  top: -130px;
  right: 10px;
  width: 154px;
  background-color: #f7fafc;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 8px;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  margin-bottom: 4px;
  border-radius: 8px;
  background-color: #e2e8f0;
  cursor: pointer;
  text-align: center;
  &:last-child {
    margin-bottom: 0;
  }
`;