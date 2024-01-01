import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import LogoComponent from './LogoComponent/LogoComponent';


function ResponsiveAppBar() {

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
