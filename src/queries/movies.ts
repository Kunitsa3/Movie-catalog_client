import { gql } from '@apollo/client';

export const POPULAR = gql`
  query ($params: Params!) {
    popularMovies(params: $params) {
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
