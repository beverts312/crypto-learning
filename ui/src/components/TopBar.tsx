import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { ConnectWallet } from './ConnectWallet';
import { Login } from './Login';
import { addressState, jwtState } from '../atoms';
import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { updateUser } from '../utils';

export function TopBar() {
  const addr = useRecoilValue(addressState);
  const jwt = useRecoilValue(jwtState);
  const authButton = !addr ? (<ConnectWallet />) : !jwt ? (<Login />) : '';
  if (!authButton) {
    updateUser(addr, 'example', jwt).catch(alert);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bailey's Crypto Playground
          </Typography>
          {authButton}
        </Toolbar>
      </AppBar>
    </Box>
  );
}