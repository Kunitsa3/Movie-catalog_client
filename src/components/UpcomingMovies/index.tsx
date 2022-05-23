import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';
import { APIMovieData, Params } from '../../types';
import { useQuery } from '@apollo/client';
import { UPCOMING } from '../../queries/movies';
import { Badge } from '@mui/material';

const UpcomingMovies = () => {
  const theme = useTheme();
  const { data } = useQuery<{ upcomingMovies: APIMovieData }, { params: Params }>(UPCOMING, {
    variables: { params: { page: 1 } },
  });
  const moviesData = data?.upcomingMovies.results;

  return (
    <Card sx={{ display: 'flex', marginLeft: 100 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 250 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {moviesData?.[0].original_title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {moviesData?.[0].release_date.slice(0, 4)}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Badge badgeContent={moviesData?.[0].vote_average}>
            <GradeIcon />
          </Badge>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`https://image.tmdb.org/t/p/original${moviesData?.[0].poster_path}`}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default UpcomingMovies;
