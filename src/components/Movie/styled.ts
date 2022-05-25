import { CardMedia, CardMediaTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Box, styled } from '@mui/system';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MovieWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '80px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: '40px',
    flexDirection: 'row',
  },
}));

export const MovieImage = styled(CardMedia)(({ theme }) => ({
  width: '280px',
  borderRadius: '8px',
  [theme.breakpoints.down('sm')]: {
    margin: 'auto',
  },
})) as OverridableComponent<CardMediaTypeMap<{}, 'img'>>;

export const MovieInformation = styled(Box)(({ theme }) => ({
  margin: '20px',
  [theme.breakpoints.up('lg')]: {
    marginLeft: '40px',
    marginRight: '150px',
  },
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    marginRight: '40px',
  },
}));

export const RatingWrapper = styled(Box)({
  display: 'flex',
});

export const Rating = styled(Typography)({
  marginLeft: '10px',
});

export const Genres = styled(Typography)({
  color: '#5c6bc0',
  marginTop: '5px',
});

export const Overview = styled(Typography)({
  marginTop: '30px',
});

export const Countries = styled(Typography)({
  marginTop: '70px',
});

export const BottomDetailsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',
  [theme.breakpoints.up('sm')]: {
    marginTop: '140px',
  },
}));

export const LikeIcon = styled(FavoriteBorderIcon)({
  fontSize: '30px',
});
