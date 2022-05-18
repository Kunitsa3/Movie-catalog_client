import styled from '@emotion/styled';
import { Box, Button, Container, Paper } from '@mui/material';

export const AuthBox = styled(Box)({
  width: '40%',
  margin: '80px auto 0 auto',
});

export const AuthWrapper = styled(Paper)({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const ButtonWrapper = styled(Container)({
  width: '80%',
  display: 'flex',
  justifyContent: 'flex-end',
  boxSizing: 'content-box',
});

export const SubmitButton = styled(Button)({
  marginTop: '20px',
  padding: '10px 40px 10px 40px',
});

export const SignInForm = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
