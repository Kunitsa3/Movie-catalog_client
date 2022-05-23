import { useState } from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Modal } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

import Authentication from '../../Authentication';

const AuthenticationModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClickOpen}>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItemButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Authentication onClose={handleClose} />
      </Modal>
    </ListItem>
  );
};

export default AuthenticationModal;
