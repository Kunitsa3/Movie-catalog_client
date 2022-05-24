import { AppBar, Drawer, IconButton, ListItemButton, styled } from '@mui/material';
import { Box } from '@mui/system';

export const HeaderWrapper = styled(Box)({
  display: 'flex',
});

export const HorizontalHeader = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const MenuItemWrapper = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
    marginRight: 16,
  },
}));

export const NavigationWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'blue',
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
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: '#e0e0e0' },

  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const NavigationItem = styled(ListItemButton, {
  shouldForwardProp: propName => propName !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  color: isActive ? '#0277bd' : '#676767',
}));
