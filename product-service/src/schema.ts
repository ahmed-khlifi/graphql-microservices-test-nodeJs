import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Product @key(fields: "id") {
    id: ID!
    name: String!
    price: Float!
  }

  extend type Query {
    products: [Product]!
  }
`;