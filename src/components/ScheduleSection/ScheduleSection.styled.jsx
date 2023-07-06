import styled from '@emotion/styled';
import { AboutTitle } from 'components/ConferenceSection/ConferenceSection.styled';

import { keyframes } from '@emotion/react';
import { Subtitle } from 'components/Offer/Offer.styled';

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeInAnimationDay = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  background-color: #f7f7f7;
  padding: 40px 0;
`;

export const SectionTitle = styled(AboutTitle)`
  /* color: #3a86ff;
  text-align: center;
  margin-bottom: 40px; */
  animation: ${fadeInAnimation} 3s ease-in-out infinite;
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

export const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DayTitle = styled.h2`
  font-size: 16px;
  color: #0e0e2c;
  text-transform: uppercase;
  margin-bottom: 16px;
  animation: ${fadeInAnimationDay} 0.5s ease-in-out;
`;

export const ScheduleCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  margin-bottom: 10px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  @media (min-width: 768px) {
    width: 300px;
    margin-top: 24px;
  }
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const TimeSlot = styled.p`
  color: #000;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const EventTitle = styled(Subtitle)`
  color: #333;
  margin-bottom: 8px;
`;
