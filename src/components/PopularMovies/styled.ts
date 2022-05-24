import { IconButton, ImageListItem, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const PopularMoviesWrapper = styled(Box)(({ theme }) => ({
  marginTop: '80px',
  [theme.breakpoints.up('sm')]: {
    marginTop: '30px',
  },
}));

export const PopularMoviesTitle = styled(Typography)(({ theme }) => ({
  marginLeft: '20px',
  fontSize: '28px',
  marginBottom: '20px',
  color: '#0277bd',
  [theme.breakpoints.up('sm')]: {
    fontSize: '24px',
  },
}));

export const PopularMovieImage = styled(ImageListItem)({
  width: 160,
  borderRadius: 4,
  overflow: 'hidden',
  marginLeft: '36px',
});

export const InformationButton = styled(IconButton)({
  color: 'rgba(255, 255, 255, 0.54)',
});
