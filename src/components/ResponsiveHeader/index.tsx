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
import {
  HeaderWrapper,
  HorizontalHeader,
  MenuItemWrapper,
  MobileNavigation,
  Navigation,
  NavigationItem,
  NavigationWrapper,
} from './styled';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { isLoggedInVar } from '../../cache/constants';

const Pages = [
  { name: 'Main page', logo: <HomeIcon />, path: '/main' },
  { name: 'Movies', logo: <MovieFilterIcon />, path: '/movies' },
];

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
        {Pages.map((page, index) => {
          const isActive = !!matchPath(page.path, location.pathname);
          return (
            <ListItem
              key={index}
              disablePadding
              onClick={() => {
                navigate(page.path);
              }}
            >
              <NavigationItem isActive={isActive}>
                <ListItemIcon>{page.logo}</ListItemIcon>
                <ListItemText primary={page.name} />
              </NavigationItem>
            </ListItem>
          );
        })}
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
      <HorizontalHeader position="fixed" color="transparent">
        <Toolbar>
          <MenuItemWrapper color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </MenuItemWrapper>
          <Typography variant="h6" noWrap component="div">
            Movie catalog
          </Typography>
        </Toolbar>
      </HorizontalHeader>
      <NavigationWrapper component="nav">
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
