const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    trails: [Trail]
    hiked: [hike]
  }

  type Trail {
    _id: ID
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

  type hike {
    _id: ID
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
    _id: ID
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

  input HikeInput {
    _id: ID
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
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    completedTrail(input: [HikeInput]): User
    saveTrail(input: [TrailInput]): User
    login(email: String!, password: String!): Auth
    removeTrail(trailId: Int!): User
    removeHike(trailId: Int!): User
  }
`;
module.exports = typeDefs;
