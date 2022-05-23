import { AppBar, Drawer, IconButton, styled } from '@mui/material';
import { Box } from '@mui/system';

export const HeaderWrapper = styled(Box)({
  display: 'flex',
});

export const HorizontalHeader = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100% - 240px)',
    marginLeft: '240px',
  },
}));

export const MenuItemWrapper = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
    marginRight: 16,
  },
}));

export const NavigationWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: 240,
    flexShrink: 0,
  },
}));

export const MobileNavigation = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },

  [theme.breakpoints.up('xs')]: {
    display: 'block',
  },

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const Navigation = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },

  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
