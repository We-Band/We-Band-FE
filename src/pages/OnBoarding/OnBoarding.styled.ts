import styled from 'styled-components';

export const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const OnboardingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  margin-bottom: 50%;
`;

export const OnBoardingText = styled.p`
  ${({ theme }) => theme.fontStyles.S02_Medium}
  color: ${({ theme }) => theme.colors.Gray.gray800}
`;
