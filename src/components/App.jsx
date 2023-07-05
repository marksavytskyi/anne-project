import { Container, Main } from './App.styled';
import DrawerAppBar from './AppBar';
import Offer from './Offer/Offer';

import '@fontsource/roboto';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
  return (
    <ThemeProvider theme={customTheme}>
      <Main style={{ fontFamily: 'Roboto' }}>
        <DrawerAppBar></DrawerAppBar>
        <Offer></Offer>
      </Main>
    </ThemeProvider>
  );
};
