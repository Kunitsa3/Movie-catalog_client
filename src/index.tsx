import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, gql } from '@apollo/client';

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
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
