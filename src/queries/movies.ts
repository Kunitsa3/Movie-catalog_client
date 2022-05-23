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
