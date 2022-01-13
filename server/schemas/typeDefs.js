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
  trails: [Trail]
  trail(_id: ID!): Trail
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!): Auth
<<<<<<< HEAD
  saveTrail(name: String!): Trail
=======
saveTrail(name: String!, description: String!, difficulty: String!, length: Number, rating: Number): Trail
>>>>>>> 1ee33d9fb84cc7b836e957942c4a171d43b2835a
  login(email: String!, password: String!): Auth
}
`;
module.exports = typeDefs;
