import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import LogoComponent from './LogoComponent/LogoComponent';

const pages = ['Бачення', 'Спікери', 'Розклад', 'Контакти'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLinkClick = refId => {
    const element = document.getElementById(refId);
    if (element) {
      const offset = 70; // Adjust this value to set the desired offset from the top
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const scrollTo = elementRect - bodyRect - offset;

      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });

      handleCloseNavMenu();
    }
  };
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', boxShadow: 'none' }}
      className="py-5"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <LogoComponent></LogoComponent>
          <Button
            href="https://docs.google.com/forms/d/1Y86XT7YW-lo8hsrK1y2UOZFFLBoCHJqe-YWSwXBK08k/edit"
            variant="outlined"
            sx={{
              color: 'orange',
              fontSize: "18px",
              border: "2px solid orange",
              '&:hover': {
                color: 'white',
                borderColor: 'white',
                backgroundColor: 'transparent' // Optional: change the background color on hover
              }
            }}
          >
            Register
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar;
