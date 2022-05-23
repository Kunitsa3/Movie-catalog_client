import { FC, useState } from 'react';
import { AlertColor } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

import Alert from './Alert';

export interface NotificationProps {
  message: string;
  type: AlertColor;
}

const Notification: FC<NotificationProps> = ({ message, type }) => {
  const [open, setOpen] = useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
