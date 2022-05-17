import { Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import Input from '../../common/Input/input';
import HelperText from '../HelperText';
import { ButtonWrapper, CustomizedButton, CustomizedWrapper } from './styled';

interface State {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const SignIn: FC = () => {
  const [values, setValues] = useState<State>({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <CustomizedWrapper elevation={3}>
      <Typography variant="h2" gutterBottom component="div">
        Sign In
      </Typography>
      <Input label="Email" value={values.email} isPassword={false} onChange={handleChange('email')} />
      <Input label="Username" value={values.username} isPassword={false} onChange={handleChange('username')} />
      <Input label="Password" isPassword value={values.password} onChange={handleChange('password')} />
      <Input
        label="Confirm password"
        value={values.confirmPassword}
        isPassword
        onChange={handleChange('confirmPassword')}
      />
      <HelperText text="Don't have an account?" linkText="Sign up" />
      <ButtonWrapper>
        <CustomizedButton variant="outlined" size="medium">
          Sign In
        </CustomizedButton>
      </ButtonWrapper>
    </CustomizedWrapper>
  );
};

export default SignIn;
