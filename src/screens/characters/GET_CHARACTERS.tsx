import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        prev
        next
      }
      results {
        id
        name
        status
        image
        species
        gender
      }
    }
  }
`;
