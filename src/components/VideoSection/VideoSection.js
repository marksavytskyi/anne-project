import React from 'react';
import { Section, VideoPlayer, VideoWrapper } from './VideoSection.styled';
import { Container } from 'components/App.styled';

const VideoSection = () => {
  return (
    <Section>
      <Container>
        <VideoWrapper>
          <VideoPlayer
            url={require('../../images/master1.mp4')}
            width="100%"
            height="auto"
            controls
          />
        </VideoWrapper>
      </Container>
    </Section>
  );
};

export default VideoSection;
