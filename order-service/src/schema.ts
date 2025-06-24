import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Order @key(fields: "id") {
    id: ID!
    product: Product!
    quantity: Int!
  }

  extend type Product @key(fields: "id") {
    id: ID!
  }

  extend type Query {
    orders: [Order]!
  }

  extend type Mutation {
    createOrder(productId: ID!, quantity: Int!): Order!
  }
`;