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
  
}

type Mutations {
  addUser(firstName: String!, lastName: String!, email: String!): Auth
  addTrail(name: String!): Trail
  updateUser(firstName: String, lastName: String, email: String): User
  login(email: String!, password; String!): Auth
}
`;
module.exports = typeDefs;
