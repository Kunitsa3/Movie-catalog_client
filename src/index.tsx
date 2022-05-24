import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, gql } from '@apollo/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { cache } from './cache';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache,
  typeDefs,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={createTheme({
        palette: {
          background: { default: '#e0e0e0' },
          text: {
            primary: '#616161',
          },
        },
      })}
    >
      <ApolloProvider client={client}>
        <CssBaseline />
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
