import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PopularMoviesWrapper } from './styled';
import { routes } from '../../routing';

const AppRoutes: FC = () => (
  <PopularMoviesWrapper>
    <Routes>
      {routes.map(route => (
        <Route {...route} />
      ))}
    </Routes>
  </PopularMoviesWrapper>
);

export default memo(AppRoutes);
