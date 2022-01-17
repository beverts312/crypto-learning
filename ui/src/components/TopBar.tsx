import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { ConnectWallet } from './ConnectWallet';
import { Login } from './Login';
import { addressState, jwtState } from '../atoms';
import { AppBar, Box, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


export function TopBar() {
  const addr = useRecoilValue(addressState);
  const jwt = useRecoilValue(jwtState);
  const authButton = !addr ? (<ConnectWallet />) : !jwt ? (<Login />) : ""
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/">Main</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/domain">Domain Resolver</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/gallery">NFT Gallery</MenuItem>
            </Menu>
          </IconButton>
          {authButton}
        </Toolbar>
      </AppBar>
    </Box>
  );
}