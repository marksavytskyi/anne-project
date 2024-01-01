import { Main } from './App.styled';
import DrawerAppBar from './AppBar';
import ConferenceSection from './ConferenceSection/ConferenceSection';
import Offer from './Offer/Offer';

import '@fontsource/roboto';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SpeakerSection from './SpeakerSection/SpeakerSection';
import ScheduleSection from './ScheduleSection/ScheduleSection';
import ContactSection from './ContactSection/ContactSection';

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export const App = () => {
  const sectionStyle = {
    display: 'flex',
    backgroundImage: `url(${require("../images/new/sss.png")})`,
    backgroundColor: 'lightgray', // Fallback or overlay color
    backgroundSize: 'cover', // Cover the entire section
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Prevent the image from repeating
    width: '100%', // Set the width
    height:"100vh",
  };
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
    zIndex: 1 // Ensures overlay is above the background image
  };
  return (
    <ThemeProvider theme={customTheme}>
      <Main style={sectionStyle} className="flex-col lg:flex-row">
        <div style={overlayStyle}>
          <DrawerAppBar></DrawerAppBar>
          <Offer></Offer>
        </div>
      </Main>
      <ConferenceSection></ConferenceSection>
      <SpeakerSection></SpeakerSection>
      <ScheduleSection></ScheduleSection>

      <ContactSection></ContactSection>
    </ThemeProvider>
  );
};
