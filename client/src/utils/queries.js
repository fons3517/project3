import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      name
      email
      bookCount
      savedTrailss {
        trailId
        name
        description
        image
        link
      }
    }
  }
`;

export const QUERY_TRAILS = gql`
  query getTrails {
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
`;

export const QUERY_SINGLE_TRAIL = gql`
  query getSingleTrail($trailId: ID!) {
    trail(trailId: $trailId) {
      _id
      name
      description
      directions
      difficulty
      length
      rating
    }
  }
`;
