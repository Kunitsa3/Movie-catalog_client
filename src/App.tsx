import { Box, CssBaseline } from '@mui/material';
import { createContext, useState } from 'react';
import './App.css';
import Notification, { NotificationProps } from './components/common/Snackbar';
import Header from './components/Header';
import ResponsiveDrawer from './components/ResponsiveHeader';
import UpcomingMovies from './components/UpcomingMovies';

export const AppContext = createContext((props: NotificationProps | undefined) => {});
const App = () => {
  const [isNotificationOpen, setNotificationOpen] = useState<NotificationProps | undefined>(undefined);
  return (
    <AppContext.Provider value={setNotificationOpen}>
      <CssBaseline />
      <Box className="App">
        {/* <Header /> */}
        <ResponsiveDrawer />
        <UpcomingMovies />
        {isNotificationOpen && <Notification {...isNotificationOpen} />}
      </Box>
    </AppContext.Provider>
  );
};

export default App;
