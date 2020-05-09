import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import { ENV } from './config/env';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const startServer = async () => {
  // Instatiate express app
  const app = express();

  // type definitions and resolvers for apollo server
  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });

  // connect to mongodb using mongoose
  await mongoose.connect(ENV.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // listen to server on PORT
  app.listen({ port: ENV.port }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

// start the main server start function
startServer();
