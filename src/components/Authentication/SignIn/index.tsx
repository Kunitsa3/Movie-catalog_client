import { FC, useContext } from 'react';
import { FormHelperText, Typography } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';

import HelperText from '../HelperText';
import { ButtonWrapper, SignInForm, AuthWrapper, SubmitButton } from '../styled';
import Input from '../../common/Input/input';
import { logInData } from '../../../types';
import { LOGIN } from '../../../queries/user';
import { AppContext } from '../../../App';

const schema = yup.object().shape({
  email: yup.string().email('invalid email').required(),
  password: yup.string().required(),
});

interface Props {
  key: 'email' | 'password';
  label: string;
  isPassword: boolean;
}

interface SignInProps {
  setSignInModalOpened: () => void;
  onClose: () => void;
}

const inputsProps: Props[] = [
  {
    key: 'email',
    label: 'Email',
    isPassword: false,
  },
  {
    key: 'password',
    label: 'Password',
    isPassword: true,
  },
];

const SignIn: FC<SignInProps> = ({ setSignInModalOpened, onClose }) => {
  const setNotification = useContext(AppContext);
  const [login, { error }] = useMutation<{ logIn: String }, { logInData: logInData }>(LOGIN, {
    onCompleted: () => {
      localStorage.setItem('authToken', 'true');
      setNotification({ message: 'Successful login', type: 'success' });
      onClose();
    },
  });
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: async values => {
      login({
        variables: { logInData: { email: values.email, password: values.password } },
      });
    },
  });

  return (
    <AuthWrapper elevation={3}>
      <Typography variant="h2" gutterBottom component="div">
        Sign In
      </Typography>
      <SignInForm onSubmit={handleSubmit}>
        {inputsProps.map(({ key, isPassword, label }) => (
          <Input
            key={key}
            label={label}
            name={key}
            value={values[key]}
            isPassword={isPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            errorsMessage={(errors[key] && touched[key] && errors[key]) || null}
          />
        ))}
        <HelperText text="Don't have an account?" linkText="Sign up" onClick={setSignInModalOpened} />
        <FormHelperText error={!!error?.message}>{error?.message}</FormHelperText>
        <ButtonWrapper>
          <SubmitButton variant="outlined" size="medium" type="submit">
            Sign In
          </SubmitButton>
        </ButtonWrapper>
      </SignInForm>
    </AuthWrapper>
  );
};

export default SignIn;
