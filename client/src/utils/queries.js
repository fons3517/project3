import { gql } from '@apollo/client';

export const QUERY_TRAILS = gql`
  query getTrails {
    trails {
      _id
      name
      location
      distance
      difficulty
      rating
    }
  }
`;

export const QUERY_SINGLE_TRAIL = gql`
  query getSingleTrail($trailId: ID!) {
    trail(trailId: $trailId) {
      _id
      name
      locatioin
      distance
      difficulty
      rating
    }
  }
`;