import styled from '@emotion/styled';

export const Title = styled.h2`
  color: #fff;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3a86ff;
    transform-origin: left;
    animation: borderAnimation 3s infinite;
  }

  @keyframes borderAnimation {
    0% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 60px;
  text-align: center;
`;
export const CustomDots = styled.ul`
  /* Slick dots styles */

  li button:before {
    color: white;
  }

  li.slick-active button:before {
    color: white;
  }
`;
export const SpeakerCard = styled.div`
  text-align: center;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    color: #fff;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;
