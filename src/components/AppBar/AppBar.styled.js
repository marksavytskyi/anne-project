import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  display: inline-block;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulseAnimation 4s infinite;

  @keyframes pulseAnimation {
    0% {
      transform: rotate(0) scale(1);
    }
    25% {
      transform: rotate(90deg) scale(1.2);
    }
    50% {
      transform: rotate(180deg) scale(1);
    }
    75% {
      transform: rotate(270deg) scale(1.2);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }

  &:hover {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.8); /* Add white shadow effect */
`;
