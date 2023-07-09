import styled from 'styled-components';

export const Section = styled.section`
  background-color: white;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 0; /* Adjust padding for mobile devices */
    padding-bottom: 40px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 20px; /* Adjust font size for mobile devices */
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  /* padding-top: 56.25%; 16:9 aspect ratio for responsive video */
`;
