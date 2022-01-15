const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    trails: [Trail]
  }

  type Trail {
    _id: ID
    name: String
    description: String
    directions: String
    difficulty: String
    length: String
    rating: Int
  }

  input TrailInput {
    _id: ID
    name: String
    description: String
    directions: String
    difficulty: String
    length: String
    rating: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    trails: [Trail]
    trail(_id: ID!): Trail
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      trails: [TrailInput]
    ): User
    saveTrail(
      name: String!
      directions: String!
      description: String!
      difficulty: String!
      length: String
      rating: Int
    ): Trail
    login(email: String!, password: String!): Auth
    removeTrail(
      name: String!
      directions: String!
      description: String!
      difficulty: String!
      length: String
      rating: Int
    ): Trail
  }
`;
module.exports = typeDefs;
