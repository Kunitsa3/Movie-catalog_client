import MainPage from '../pages/MainPage';
import MovieListPage from '../pages/MovieListPage';
import MoviePage from '../pages/MoviePage';

export const paths = {
  home: '/main',
  404: '/*',
  movies: '/movies',
  movie: '/movie/:id',
};

export const routes = [
  {
    path: paths.home,
    element: <MainPage />,
    key: '1',
  },
  {
    path: paths.movies,
    element: <MovieListPage />,
    key: '2',
  },
  {
    path: paths.movie,
    element: <MoviePage />,
    key: '3',
  },
  {
    path: paths[404],
    element: <MainPage />,
    key: '5',
  },
];
