import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { ConnectWallet } from './ConnectWallet';
import { Login } from './Login';
import { addressState, jwtState } from '../atoms';
import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
export function TopBar() {
  const addr = useRecoilValue(addressState);
  const jwt = useRecoilValue(jwtState);
  const authButton = !addr ? (<ConnectWallet />) : !jwt ? (<Login />) : ""

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
          {authButton}
        </Toolbar>
      </AppBar>
    </Box>
  );
}