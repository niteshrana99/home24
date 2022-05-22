import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from "react-router-dom";
import ContextProvider from './Context/context';
import { Global, ThemeProvider } from '@emotion/react';
import { pagecss } from './global.styles';
import { theme } from './shared/theme';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './Components/FallBack';
import App from './App';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

const errorHandler = (error: any, errorInfo: any) => {
  console.log(error);
  console.log(errorInfo)
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallBack} onError={errorHandler}>
    <BrowserRouter>
    <ContextProvider>
      <ThemeProvider theme={theme}>
      <Global styles={pagecss} />
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ThemeProvider>
    </ContextProvider>
    </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)
