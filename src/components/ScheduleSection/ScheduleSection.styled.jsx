import styled from '@emotion/styled';
import { AboutTitle } from 'components/ConferenceSection/ConferenceSection.styled';

import { keyframes } from '@emotion/react';
import { Container } from 'components/App.styled';

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
  color: #3a85ffce;
  text-align: center;
  margin-bottom: 40px;
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${props => props.theme.breakpoints.up('md')} {
    grid-template-columns: repeat(3, 1fr);
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
    max-width: 300px;
    margin-top: 24px;
  }
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledContainer = styled(Container)`
  background-color: #f5f5f5;
  position: relative;
`;

export const whiteShadowAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 gray;
  }
  50% {
    box-shadow: 0 0 20px 10px gray;
  }
  100% {
    box-shadow: 0 0 0 gray;
  }
`;

export const AnimatedShadow = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  animation: ${whiteShadowAnimation} 3s linear infinite;
`;

export const StyledPrevArrow = styled.div`
  position: absolute;
  z-index: 2;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10%;
  border: 2px solid white;
  padding: 10px 20px;
  letter-spacing: 1px;
  font-weight: 700;
  background-color: #3a86ff;
  color: white;
  transition: transform 0.3s;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 3px 6px;
  }
`;

export const StyledNextArrow = styled.div`
  position: absolute;
  z-index: 2;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10%;
  border: 2px solid white;
  padding: 10px 20px;
  letter-spacing: 1px;
  font-weight: 700;
  background-color: #3a86ff;
  color: white;
  transition: transform 0.3s;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 3px 6px;
  }
`;
