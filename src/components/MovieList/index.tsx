import { useQuery } from '@apollo/client';
import { Box, Pagination, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { MOVIE_BY_PARAMS } from '../../queries/movies';
import { APIMovieData, Params } from '../../types';
import Spinner from '../common/Spinner';
import GenresFilter from './GenresFilter';
import MovieListItem from './MovieListItem';
import { PaginationWrapper } from './styled';

const MovieList = () => {
  const [params, setParams] = useState({ page: 1, genres: '', excludedGenres: '' });

  const handleChange = (name: string, event: SelectChangeEvent<string>) => {
    setParams({ ...params, [name]: event.target.value });
  };

  const { data } = useQuery<{ getMoviesByParams: APIMovieData }, { params: Params }>(MOVIE_BY_PARAMS, {
    variables: {
      params: { page: params.page, with_genres: String(params.genres), without_genres: String(params.excludedGenres) },
    },
  });
  const moviesData = data?.getMoviesByParams.results;

  return (
    <Box>
      {moviesData ? (
        <Box>
          <GenresFilter handleGenreChange={e => handleChange('genres', e)} genre={params.genres} label="Genre" />
          <GenresFilter
            handleGenreChange={e => handleChange('excludedGenres', e)}
            genre={params.excludedGenres}
            label="Excluded genres"
          />
          {moviesData?.map(movieData => (
            <MovieListItem
              key={movieData?.id}
              poster={movieData?.poster_path}
              title={movieData?.original_title}
              overview={movieData?.overview}
            />
          ))}
          <PaginationWrapper>
            <Pagination
              count={10}
              page={params.page}
              onChange={e => handleChange('page', e as SelectChangeEvent<string>)}
            />
          </PaginationWrapper>
        </Box>
      ) : (
        <Spinner />
      )}
    </Box>
  );
};

export default MovieList;

