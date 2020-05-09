import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  # queries
  type Query {
    notes: [Note]
  }

  # Note type def
  type Note {
    id: ID!
    title: String!
    paragraph: String!
    path: String
  }

  # mutations
  type Mutation {
    createNote(title: String!, paragraph: String!): Note!
  }
`;
