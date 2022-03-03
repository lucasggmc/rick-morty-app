import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query {
    characters {
      results {
        id
        image
        status
        episode {
          name
          episode
          air_date
          created
        }
      }
    }
  }
`;
