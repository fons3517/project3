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
    trailId: Int
    name: String
    description: String
    directions: String
    difficulty: String
    length: String
    rating: Int
    url: String
    img: String
  }

  input TrailInput {
    trailId: Int
    name: String
    description: String
    directions: String
    difficulty: String
    length: String
    rating: Int
    url: String
    img: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    trails: [Trail]
    trail(_id: ID!): Trail
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addHike(trail: [TrailInput]): User
    saveTrail(input: [TrailInput]): User
    login(email: String!, password: String!): Auth
    removeTrail(trailId: Int!): User
  }
`;
module.exports = typeDefs;
