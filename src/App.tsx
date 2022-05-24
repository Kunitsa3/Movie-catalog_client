import { createContext, FC, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Notification, { NotificationProps } from './components/common/Snackbar';
import ResponsiveDrawer from './components/ResponsiveHeader';
import AppRoutes from './components/AppRoutes';

export const AppContext = createContext((props: NotificationProps | undefined) => {});
const App: FC = () => {
  const [isNotificationOpen, setNotificationOpen] = useState<NotificationProps | undefined>(undefined);
  return (
    <AppContext.Provider value={setNotificationOpen}>
      <BrowserRouter>
        <ResponsiveDrawer />
        {isNotificationOpen && <Notification {...isNotificationOpen} />}
        <AppRoutes />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
