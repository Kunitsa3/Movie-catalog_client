import styled from '@emotion/styled';
import { Button, Container, Paper } from '@mui/material';

export const CustomizedWrapper = styled(Paper)({
  width: '40%',
  height: '70%',
  margin: '60px auto 0 auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

export const ButtonWrapper = styled(Container)({
  width: '80%',
  display: 'flex',
  justifyContent: 'flex-end',
  boxSizing: 'content-box',
});

export const CustomizedButton = styled(Button)({
  marginTop: '30px',
  padding: '10px 40px 10px 40px',
});
