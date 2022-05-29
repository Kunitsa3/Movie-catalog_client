import { gql } from '@apollo/client';

export const POPULAR = gql`
  query ($params: Params!) {
    popularMovies(params: $params) {
      results {
        original_title
        poster_path
        id
        release_date
      }
    }
  }
`;

export const UPCOMING = gql`
  query ($params: Params!) {
    upcomingMovies(params: $params) {
      results {
        original_title
        poster_path
        id
        adult
        overview
        vote_average
        release_date
      }
    }
  }
`;

export const MOVIE = gql`
  query ($params: Params!) {
    getMovieDetails(params: $params) {
      adult
      budget
      genres {
        name
      }
      homepage
      id
      imdb_id
      original_title
      overview
      popularity
      poster_path
      release_date
      runtime
      vote_average
      production_countries {
        name
      }
      production_companies {
        name
        logo_path
      }
    }
  }
`;

export const MOVIE_BY_PARAMS = gql`
  query ($params: Params!) {
    getMoviesByParams(params: $params) {
      results {
        original_title
        poster_path
        id
        adult
        overview
        vote_average
        release_date
      }
    }
  }
`;
