import * as yup from 'yup';
import { Typography } from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import Input from '../../common/Input/input';
import HelperText from '../HelperText';
import { ButtonWrapper, SignInForm, AuthWrapper, SubmitButton } from '../styled';

const schema = yup.object().shape({
  email: yup.string().email('invalid email').required(),
  username: yup.string().min(3).max(30).required(),
  password: yup.string().required(),
  confirmPassword: yup.string().equals([yup.ref('password')], 'should be equal to password'),
});

interface Props {
  key: 'email' | 'password' | 'username' | 'confirmPassword';
  label: string;
  isPassword: boolean;
}

interface SignInProps {
  setSignInModalOpened: () => void;
}

const inputsProps: Props[] = [
  {
    key: 'email',
    label: 'Email',
    isPassword: false,
  },
  {
    key: 'username',
    label: 'Username',
    isPassword: false,
  },
  {
    key: 'password',
    label: 'Password',
    isPassword: true,
  },
  {
    key: 'confirmPassword',
    label: 'Confirm password',
    isPassword: true,
  },
];

const SignUp: FC<SignInProps> = ({ setSignInModalOpened }) => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema,
    onSubmit: values => {},
  });

  return (
    <AuthWrapper elevation={3}>
      <Typography variant="h2" gutterBottom component="div">
        Sign Up
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
        <HelperText text="Already signed up?" linkText="Go to login" onClick={setSignInModalOpened} />
        <ButtonWrapper>
          <SubmitButton variant="outlined" size="medium" type="submit">
            Sign Up
          </SubmitButton>
        </ButtonWrapper>
      </SignInForm>
    </AuthWrapper>
  );
};

export default SignUp;
