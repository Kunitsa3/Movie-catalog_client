import MainPage from '../pages/MainPage';
import MoviePage from '../pages/Movie';

export const paths = {
  home: '/main',
  404: '/*',
  movies: '/movies',
};

export const routes = [
  {
    path: paths.home,
    element: <MainPage />,
    key: '1',
  },
  {
    path: paths.movies,
    element: <MoviePage />,
    key: '3',
  },
  {
    path: paths[404],
    element: <MainPage />,
    key: '2',
  },
];
