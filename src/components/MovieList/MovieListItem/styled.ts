import { CardMedia, CardMediaTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Box, styled } from '@mui/system';

export const MovieListItemWrapper = styled(Box)({
  borderBottom: '1px solid grey',
  margin: '20px 100px',
  display: 'flex',
  alignItems: 'center',
  padding: '30px',
});

export const MovieImage = styled(CardMedia)(({ theme }) => ({
  width: '100px',
  borderRadius: '8px',
  [theme.breakpoints.down('sm')]: {
    margin: 'auto',
  },
})) as OverridableComponent<CardMediaTypeMap<{}, 'img'>>;

export const MovieInformationWrapper = styled(Box)({
  marginLeft: '40px',
  height: '100%',
});

export const MovieName = styled(Typography)({ marginBottom: '20px' });

export const FlexBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
});
