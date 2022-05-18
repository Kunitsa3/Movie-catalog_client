import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthBox } from './styled';

const Authentication = () => {
  const [isSignInModalOpened, setSignInModalOpened] = useState(true);
  return (
    <AuthBox>
      {isSignInModalOpened ? (
        <SignIn
          setSignInModalOpened={() => {
            setSignInModalOpened(!isSignInModalOpened);
          }}
        />
      ) : (
        <SignUp
          setSignInModalOpened={() => {
            setSignInModalOpened(!isSignInModalOpened);
          }}
        />
      )}
    </AuthBox>
  );
};

export default Authentication;
