import styled from 'styled-components';

export const UserTableContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 154px;
  max-height: 200px;
  height: fit-content;
  top: 160px;
  margin-left: -50px;
  overflow: auto;

  flex-shrink: 0;
  padding: 8px;
  gap: 4px;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.Gray.gray50};
  box-shadow: 0px 0px 1px 0px rgba(87, 85, 85, 0.25);
`;

export const UserButton = styled.div<{ $selected: boolean }>`
  ${({ theme }) => theme.fontStyles.B03}

  display: flex;
  height: 44px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;

  padding: 12px 36px;
  gap: 10px;

  border-radius: 8px;
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.WBOrange.wbo200 : theme.colors.Gray.gray200};

  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.WBOrange.wbo500 : 'transparent'};
`;
