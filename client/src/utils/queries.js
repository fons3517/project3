import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      
      trails {
        trailId
        name
        description
        directions
        difficulty
        length
        rating
      }
    }
  }
`;

export const QUERY_TRAILS = gql`
  query getTrails {
    trails {
      trailId
      name
      description
      directions
      difficulty
      length
      rating
    }
  }
`;

export const QUERY_SINGLE_TRAIL = gql`
  query getSingleTrail($trailId: ID!) {
    trail(trailId: $trailId) {
      trailId
      name
      description
      directions
      difficulty
      length
      rating
    }
  }
`;
