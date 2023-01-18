import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/system';

const lightColor = 'rgba(255, 255, 255, 1)';

function Header(props) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
      </AppBar>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
      <Stack direction="row" spacing={2}>
      <Button vcomponent={Link} to="./VideoCMS" variant="contained" color="primary" style={{ fontSize: '20px' }} >
      Галерея
      </Button>
      <Button vcomponent={Link} to="./VideoCMS" variant="contained" color="primary" style={{ fontSize: '20px' }} >
      Популярность
      </Button>
      <Button vcomponent={Link} to="./WordPress" variant="contained" color="primary" style={{ fontSize: '20px' }}>
      Видеообзор 
      </Button>
    </Stack>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
