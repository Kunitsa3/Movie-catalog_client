import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const PopularMoviesWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    marginLeft: '250px',
  },
}));
