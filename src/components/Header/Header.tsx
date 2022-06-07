import React, { ReactElement } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  title: string;
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

const Header = ({
  title,
  drawerWidth,
  handleDrawerToggle,
}: HeaderProps): ReactElement => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
