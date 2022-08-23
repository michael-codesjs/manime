import { API } from "aws-amplify";
import { QueryFunctionContext } from "react-query";
import { PageResult } from "../../types";
import { Page } from "../../types/api";

export const getPopular = async (context: QueryFunctionContext<["popular", { page: number, perPage: number }]>) => {

  const [, { page, perPage }] = context.queryKey;
  const result = await (
    API.graphql({
      query: GRAPHQL_QUERY,
      variables: {
        page, perPage
      }
    }) as Promise<PageResult> // we should infer the type according to https://docs.amplify.aws/lib/graphqlapi/query-data/q/platform/js/#simple-query
  );
  return result.data.Page;

}

const GRAPHQL_QUERY = `
  query($page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        lastPage
        hasNextPage
      }
      media(search: $search, type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
          native
        }
        description
        genres
        status
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
        startDate {
          month
          year
        }
        endDate {
          month
          year
        }
        episodes
        type
        genres
      }
    }
  }
`;
