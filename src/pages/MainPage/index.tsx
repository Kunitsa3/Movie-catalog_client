import { FC } from 'react';
import PopularMovies from '../../components/PopularMovies';
import UpcomingMovies from '../../components/UpcomingMovies';
import { MainPageWrapper } from './styled';

const MainPage: FC = () => (
  <MainPageWrapper>
    <PopularMovies />
    <UpcomingMovies />
  </MainPageWrapper>
);

export default MainPage;
