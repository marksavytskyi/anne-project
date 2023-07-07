import React from 'react';

import { Typography, Grid } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import styled from '@emotion/styled';
import { Container } from 'components/App.styled';
import { Title } from 'components/Offer/Offer.styled';
import { keyframes } from '@emotion/react';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ContactSection = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  const phoneNumber = '+380 97 023 89 62';

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleGoogleMapsClick = () => {
    window.open(googleMapsLink, '_blank');
  };

  const pulseAnimation1 = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

  const pulseAnimation2 = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

  const pulseAnimation3 = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

  const PulseButton1 = styled(IconButton)`
    animation: ${pulseAnimation1} 3s infinite;
  `;

  const PulseButton2 = styled(IconButton)`
    animation: ${pulseAnimation2} 4s infinite;
  `;

  const PulseButton3 = styled(IconButton)`
    animation: ${pulseAnimation3} 5s infinite;
  `;

  const Section = styled.section`
    background-color: #0e0e2c;
    padding: 40px 0;
    color: white;
  `;

  const ContactTitle = styled(Title)`
    text-align: center;
  `;

  const ContactItem = styled(Grid)`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-basis: auto;
    @media (min-width: 480px) {
      flex-basis: auto;
    }
  `;

  const instagramLink =
    'https://instagram.com/so.conference?igshid=Y2I2MzMwZWM3ZA==';

  const googleMapsLink = 'https://maps.app.goo.gl/3n1VFsQdcKB9Muue8?g_st=it';

  return (
    <Section id="section-3">
      <Container>
        <ContactTitle variant="h2">Contacts</ContactTitle>
        <Grid
          container
          spacing={2}
          style={{ justifyContent: 'center', marginBottom: 12 }}
        >
          <ContactItem item xs={12}>
            <PulseButton1 component="a" href={instagramLink} target="_blank">
              <InstagramIcon
                style={{ fill: 'white', fontSize: isTablet ? '48px' : '24px' }}
              />
            </PulseButton1>
          </ContactItem>
          <ContactItem item xs={12}>
            <PulseButton2 onClick={handlePhoneClick}>
              <Phone
                style={{ fill: 'white', fontSize: isTablet ? '48px' : '24px' }}
              />
            </PulseButton2>
          </ContactItem>
          <ContactItem item xs={12}>
            <PulseButton3 onClick={handleGoogleMapsClick}>
              <LocationOn
                style={{ fill: 'white', fontSize: isTablet ? '48px' : '24px' }}
              />
            </PulseButton3>
          </ContactItem>
        </Grid>
        <Typography style={{ textAlign: 'center' }} variant="body1">
          Вул. Танкістів 43а, м. Одеса
        </Typography>
      </Container>
    </Section>
  );
};

export default ContactSection;
