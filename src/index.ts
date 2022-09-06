import { Query } from './resolvers/Query';
import { join } from 'path';
import { readFileSync } from 'fs';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

const server = new ApolloServer({
  typeDefs: readFileSync(join(__dirname, 'schema.graphql'), 'utf-8'),
  resolvers: {
    Query,
  },
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

(async () => {
  const { url } = await server.listen();
  console.log(`${url}でサーバを起動中`);
})();
