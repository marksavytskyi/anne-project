import styled from '@emotion/styled';
import { Title, Subtitle } from 'components/Offer/Offer.styled';

export const AboutTitle = styled(Title)`
  color: #3a86ff;
  text-align: center;
  margin: 0;
  margin-bottom: 24px;
`;

export const Desc = styled(Subtitle)`
  margin: 0;
  margin-bottom: 24px;
`;

export const ActionTitle = styled(AboutTitle)`
  font-size: 20px;
  animation: slideAnimation 2s infinite;
  margin: 0;

  @keyframes slideAnimation {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
