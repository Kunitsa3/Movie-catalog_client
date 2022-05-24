import { CardContent, ImageListItem, Paper, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const UpcomingMoviesWrapper = styled(Box)(({ theme }) => ({
  marginTop: '60px',
  [theme.breakpoints.up('sm')]: {
    marginTop: '30px',
  },
}));

export const UpcomingMoviesTitle = styled(Typography)(({ theme }) => ({
  marginLeft: '20px',
  fontSize: '28px',
  marginBottom: '20px',
  color: '#0277bd',
  [theme.breakpoints.up('sm')]: {
    fontSize: '24px',
  },
}));

export const UpcomingMoviesCard = styled(Paper)({
  display: 'flex',
  width: '300px',
  height: '200px',
  marginLeft: '40px',
  marginRight: '10px',
  backgroundColor: '#eeeeee',
});

export const MovieInformationWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: 250,
});

export const MovieInformation = styled(CardContent)({
  flex: '1 0 auto',
});

export const IconsWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px 16px 0',
});

export const RatingWrapper = styled(Box)({
  display: 'flex',
  marginLeft: '10px',
});

export const Rating = styled(Typography)({
  marginLeft: '2px',
  marginRight: '5px',
});

export const MovieImage = styled(ImageListItem)({
  width: 200,
  borderRadius: '4px',
});
