const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    phone: Int
    createdAt: String!
    updatedAt: String!
  }
  input UpdateUser {
    name: String
    email: String
    phone: Int
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!, phone: Int, createdAt: String, updatedAt: String): User!
    updateUser(id: ID!, data: UpdateUser!): User!
    destroyUser(id: ID!): User!
  }
`;

module.exports = typeDefs;
