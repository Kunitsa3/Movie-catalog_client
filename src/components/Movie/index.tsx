import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import {
  BottomDetailsWrapper,
  Countries,
  Genres,
  LikeIcon,
  MovieImage,
  MovieInformation,
  MovieWrapper,
  Overview,
  Rating,
  RatingWrapper,
  TitleWrapper,
} from './styled';
import { MOVIE } from '../../queries/movies';
import { MovieDetails, Params } from '../../types';
import Spinner from '../common/Spinner';

const Movie: FC = () => {
  const { id } = useParams();
  const { data } = useQuery<{ getMovieDetails: MovieDetails }, { params: Params }>(MOVIE, {
    variables: { params: { id: Number(id) } },
  });
  const moviesData = data?.getMovieDetails;
  const genresString = (moviesData?.genres, 'name');
  const productCountriesString = (moviesData?.production_countries, 'name');

  return moviesData ? (
    <MovieWrapper>
      <MovieImage component="img" image={`https://image.tmdb.org/t/p/original${moviesData?.poster_path}`} />
      <MovieInformation>
        <TitleWrapper>
          <Typography variant="h4">{moviesData?.original_title}</Typography>
          <RatingWrapper>
            <StarBorderIcon color="info" />
            <Rating variant="subtitle1">{moviesData?.vote_average}</Rating>
          </RatingWrapper>
        </TitleWrapper>

        <Genres variant="subtitle2">{genresString}</Genres>
        <Overview variant="subtitle1">{moviesData?.overview}</Overview>
        <Countries variant="subtitle1" sx={{ marginTop: '30px' }}>
          {`Countries: ${productCountriesString}`}
        </Countries>
        <BottomDetailsWrapper>
          <LikeIcon />
          <Typography variant="h5">{`${moviesData?.runtime} min`}</Typography>
        </BottomDetailsWrapper>
      </MovieInformation>
    </MovieWrapper>
  ) : (
    <Spinner />
  );
};

export default Movie;
