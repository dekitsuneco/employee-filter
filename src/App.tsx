import { Toolbar, Typography, Box, CssBaseline, Divider } from '@mui/material';
import React, { useState } from 'react';
import { Header } from './components/Header';
import { NavigationPanel } from './components/NavigationPanel';
import { EmployeesGrid } from './components/EmployeesGrid';

const drawerWidth = 240;

function App() {
  const container = undefined;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header
        title={'Filter employees by jobs'}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <NavigationPanel
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        container={container}
        mobileOpen={mobileOpen}
      />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography variant='h4'>Employee List</Typography>
        <Divider sx={{ mb: '1.2rem' }} />
        <EmployeesGrid />
      </Box>
    </Box>
  );
}

export default App;
