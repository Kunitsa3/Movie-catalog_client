import { FC } from 'react';
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

const Movie: FC = () => {
  const { data } = useQuery<{ getMovieDetails: MovieDetails }, { params: Params }>(MOVIE, {
    variables: { params: { id: 639933 } },
  });
  const moviesData = data?.getMovieDetails;
  const genresString = moviesData?.genres.map(genre => genre.name).join(', ');
  const productCountriesString = moviesData?.production_countries.map(company => company.name).join(', ');

  return (
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
  );
};

export default Movie;
