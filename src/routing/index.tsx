import MainPage from '../pages/MainPage';

export const paths = {
  home: '/main',
  404: '/*',
};

export const routes = [
  {
    path: paths.home,
    element: <MainPage />,
    key: '1',
  },
  {
    path: paths[404],
    element: <MainPage />,
    key: '2',
  },
];
