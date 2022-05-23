// import * as React from 'react';
import { FC, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useReactiveVar } from '@apollo/client';

import AuthenticationModal from './AuthenticationModal';
import { isLoggedInVar } from '../../cache';
import {
  HeaderWrapper,
  HorizontalHeader,
  MenuItemWrapper,
  MobileNavigation,
  Navigation,
  NavigationWrapper,
} from './styled';

const Pages = [
  { name: 'Main page', logo: <HomeIcon /> },
  { name: 'Movies', logo: <MovieFilterIcon /> },
];

const Header: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const token = useReactiveVar(isLoggedInVar);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {Pages.map((page, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{page.logo}</ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {token ? (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<FavoriteBorderIcon />}</ListItemIcon>
              <ListItemText primary="Wishlists" />
            </ListItemButton>
          </ListItem>
        ) : (
          <AuthenticationModal />
        )}
      </List>
    </div>
  );

  return (
    <HeaderWrapper>
      <CssBaseline />
      <HorizontalHeader position="fixed">
        <Toolbar>
          <MenuItemWrapper color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </MenuItemWrapper>
          <Typography variant="h6" noWrap component="div">
            Movie catalog
          </Typography>
        </Toolbar>
      </HorizontalHeader>
      <NavigationWrapper component="nav" aria-label="mailbox folders">
        <MobileNavigation
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </MobileNavigation>
        <Navigation variant="permanent" open>
          {drawer}
        </Navigation>
      </NavigationWrapper>
    </HeaderWrapper>
  );
};

export default Header;
