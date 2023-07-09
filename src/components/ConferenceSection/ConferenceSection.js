import React from 'react';
import { Box } from '@mui/material';
import { Desc, AboutTitle, ActionTitle } from './ConferenceSection.styled';
import { Container } from 'components/App.styled';

const ConferenceSection = () => {
  return (
    <Box
      component="section"
      id="section-0"
      style={{ paddingBottom: 40, paddingTop: 40 }}
    >
      <Container>
        <AboutTitle variant="h2">Бачення</AboutTitle>
        <Desc variant="body1">
          «Не так важливо, що ти думаєш, не так важливо, як ти виглядаєш, не так
          важливо, що ти відчуваєш, як важливо, що Бог думає про тебе, як Бог
          бачить тебе, і що Він відчуває по відношенню до тебе.»
        </Desc>
        <ActionTitle variant="body1">Будемо раді бачити тебе!</ActionTitle>
      </Container>
    </Box>
  );
};

export default ConferenceSection;
