import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        trails {
          _id
          name
          description
          directions
          difficulty
          length
          rating
        }
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
        firstName
        lastName
        email
        trails {
          _id
          name
          description
          directions
          difficulty
          length
          rating
        }
      }
    }
  }
`;

export const SAVE_TRAIL = gql`
  mutation saveTrail(
    $name: String!
    $description: String!
    $directions: String!
    $difficulty: String!
    $length: Int
    $rating: Int
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
      user {
        _id
      }
    }
  }
`;
