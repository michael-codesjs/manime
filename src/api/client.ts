import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/npm',
  cache: new InMemoryCache(),
});


export default client;