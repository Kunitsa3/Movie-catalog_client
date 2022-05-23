import { createContext, FC, useState } from 'react';
import { Box, CssBaseline } from '@mui/material';

import './App.css';
import Notification, { NotificationProps } from './components/common/Snackbar';
import ResponsiveDrawer from './components/ResponsiveHeader';
import PopularMovies from './components/PopularMovies';
import UpcomingMovies from './components/UpcomingMovies';

export const AppContext = createContext((props: NotificationProps | undefined) => {});
const App: FC = () => {
  const [isNotificationOpen, setNotificationOpen] = useState<NotificationProps | undefined>(undefined);
  return (
    <AppContext.Provider value={setNotificationOpen}>
      <CssBaseline />
      <Box className="App">
        <ResponsiveDrawer />
        <PopularMovies />
        <UpcomingMovies />
        {isNotificationOpen && <Notification {...isNotificationOpen} />}
      </Box>
    </AppContext.Provider>
  );
};

export default App;
