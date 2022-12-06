import { Navigation } from './src/navigation/Navigation';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/integrations/apollo/apolloClient';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};
