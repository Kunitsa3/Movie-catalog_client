import { Box, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
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
    <Box>
      <Button color="inherit" onClick={handleClickOpen}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Authentication onClose={handleClose} />
      </Modal>
    </Box>
  );
};

export default AuthenticationModal;
