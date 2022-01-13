import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_TRAIL = gql`
  mutation saveTrail(
<<<<<<< HEAD
    $name: String!
    $description: String!
    $directions: String!
    $difficulty: String!
    $length: Number
    $rating: Number
=======
      $name: String!
      $description: String!
      $directions: String!
      $difficulty: String!
      $length: Number
      $rating: Number
>>>>>>> 1ee33d9fb84cc7b836e957942c4a171d43b2835a
  ) {
    saveTrail(
      name: $name
      description: $description
      directions: $directions
      difficulty: $difficulty
      length: $length
      rating: $rating
    ) {
      token
<<<<<<< HEAD
      user {
        _id
=======
        user {
          _id
>>>>>>> 1ee33d9fb84cc7b836e957942c4a171d43b2835a
      }
    }
  }
`;