import { FC, forwardRef, ForwardRefRenderFunction, memo, useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthBox } from './styled';

interface AuthenticationProps {
  onClose: () => void;
}

const Authentication: ForwardRefRenderFunction<HTMLDivElement, AuthenticationProps> = ({ onClose }, ref) => {
  const [isSignInModalOpened, setSignInModalOpened] = useState(true);
  return (
    <AuthBox ref={ref} tabIndex={0}>
      {isSignInModalOpened ? (
        <SignIn
          setSignInModalOpened={() => {
            setSignInModalOpened(!isSignInModalOpened);
          }}
          onClose={onClose}
        />
      ) : (
        <SignUp
          setSignInModalOpened={() => {
            setSignInModalOpened(!isSignInModalOpened);
          }}
          onClose={onClose}
        />
      )}
    </AuthBox>
  );
};

export default forwardRef(Authentication);
