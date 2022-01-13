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
}

type Auth {
  token: ID
  user: User
}

type Query {
  me: User
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!): Auth
saveTrail(name: String!, description: String!, difficulty: String!, length: Number, rating: Number): Trail
  login(email: String!, password: String!): Auth
}
`;
module.exports = typeDefs;
