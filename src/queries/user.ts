import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation register($registerData: RegisterInput!) {
    register(userData: $registerData)
  }
`;

export const LOGIN = gql`
  mutation logIn($logInData: LogInInput!) {
    logIn(userData: $logInData)
  }
`;
