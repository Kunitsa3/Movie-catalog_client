import { LikeIcon } from '../../Movie/styled';
import { FlexBox, MovieImage, MovieInformationWrapper, MovieListItemWrapper, MovieName } from './styled';

const MovieListItem = ({ poster, title, overview }) => {
  return (
    <MovieListItemWrapper>
      <MovieImage component="img" image={`https://image.tmdb.org/t/p/original${poster}`} />
      <MovieInformationWrapper>
        <FlexBox>
          <MovieName variant="h4">{title}</MovieName>
          <LikeIcon />
        </FlexBox>

        <MovieName>{overview}</MovieName>
      </MovieInformationWrapper>
    </MovieListItemWrapper>
  );
};

export default MovieListItem;
