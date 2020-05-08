import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello GraphQL!'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
