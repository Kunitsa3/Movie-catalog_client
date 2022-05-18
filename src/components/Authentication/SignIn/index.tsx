import * as yup from 'yup';
import { Typography } from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import Input from '../../common/Input/input';
import HelperText from '../HelperText';
import { ButtonWrapper, SignInForm, AuthWrapper, SubmitButton } from '../styled';

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

const SignIn: FC<SignInProps> = ({ setSignInModalOpened }) => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: values => {},
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
