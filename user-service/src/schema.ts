import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    name: String!
    email: String!
  }

  extend type Query {
    users: [User]!
  }
`;