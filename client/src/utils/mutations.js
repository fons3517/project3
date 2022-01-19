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
          trailId
          name
          description
          directions
          difficulty
          length
          rating
          url
          img
        }
        hiked {
          _id
          trailId
          name
          description
          directions
          difficulty
          length
          rating
          url
          img
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
          trailId
          name
          description
          directions
          difficulty
          length
          rating
          url
          img
        }
        hiked {
          _id
          trailId
          name
          description
          directions
          difficulty
          length
          rating
          url
          img
        }
      }
    }
  }
`;

export const SAVE_TRAIL = gql`
  mutation saveTrail($input: [TrailInput]) {
    saveTrail(input: $input) {
      _id
      firstName
      lastName
      email
      trails {
        _id
        trailId
        name
        description
        directions
        difficulty
        length
        rating
        url
        img
      }
      hiked {
        _id
        trailId
        name
        description
        directions
        difficulty
        length
        rating
        url
        img
      }
    }
  }
`;

export const COMPLETED_TRAIL = gql`
  mutation compledTrail($input: [HikeInput]) {
    completedTrail(input: $input) {
      _id
      firstName
      lastName
      email
      trails {
        _id
        trailId
        name
        description
        directions
        difficulty
        length
        rating
        url
        img
      }
      hiked {
        _id
        trailId
        name
        description
        directions
        difficulty
        length
        rating
        url
        img
      }
    }
  }
`;

export const REMOVE_TRAIL = gql`
  mutation removeTrail($trailId: Int!) {
    removeTrail(trailId: $trailId) {
      _id
      firstName
      lastName
      email
      trails {
        _id
        trailId
        name
        description
        directions
        difficulty
        length
        rating
        url
        img
      }
    }
  }
`; 