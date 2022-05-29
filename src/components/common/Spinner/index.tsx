import { CircularProgress } from '@mui/material';
import { SpinnerWrapper } from './sttyled';

const Spinner = () => (
  <SpinnerWrapper>
    <CircularProgress color="inherit" />
  </SpinnerWrapper>
);

export default Spinner;
