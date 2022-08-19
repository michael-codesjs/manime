import { gql } from "@apollo/client";


export const PAGE = gql`
  query($page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        lastPage
        hasNextPage
      }
      media(search: $search, type: ANIME, sort: TRENDING) {
        id
        title {
          romaji
          english
          native
        }
        type
        genres
      }
    }
  }
`

export const GET_CHARACTER = gql`
  query ($id: Int) {
    Character (id: $id) {
      id
      name {
        full
        native
        alternative
      }
    }
  }
`;