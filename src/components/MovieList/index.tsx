import { useQuery } from '@apollo/client';
import { Box, Pagination } from '@mui/material';
import { useState } from 'react';
import { MOVIE_BY_PARAMS } from '../../queries/movies';
import { APIMovieData, Params } from '../../types';
import Spinner from '../common/Spinner';
import MovieListItem from './MovieListItem';
import { PaginationWrapper } from './styled';

const MovieList = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery<{ getMoviesByParams: APIMovieData }, { params: Params }>(MOVIE_BY_PARAMS, {
    variables: { params: { page, year: 2019 } },
  });
  const moviesData = data?.getMoviesByParams.results;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return moviesData ? (
    <Box>
      {moviesData?.map(movieData => (
        <MovieListItem
          poster={movieData?.poster_path}
          title={movieData?.original_title}
          overview={movieData?.overview}
        />
      ))}
      <PaginationWrapper>
        <Pagination count={10} page={page} onChange={handleChange} />
      </PaginationWrapper>
    </Box>
  ) : (
    <Spinner />
  );
};

export default MovieList;
