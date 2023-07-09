import React from 'react';
import { Section, VideoWrapper } from './VideoSection.styled';
import { Container } from 'components/App.styled';

const VideoSection = () => {
  return (
    <Section>
      <Container>
        <VideoWrapper>
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/NW4tNiNucms"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
      </Container>
    </Section>
  );
};

export default VideoSection;
