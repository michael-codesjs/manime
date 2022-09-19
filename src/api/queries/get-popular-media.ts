import { API } from "aws-amplify";
import { QueryFunctionContext } from "react-query";
import { PageResult } from "../../types";
import { MediaType } from "../../types/api";

type GetPopularMediaContext = [
  string,
  {
    type: MediaType,
    page: number,
    perPage: number
  }
];

export const getPopularmedia = async (context: QueryFunctionContext<GetPopularMediaContext>) => {

  const [, { type, page, perPage }] = context.queryKey;

  const GRAPHQL_QUERY = `
  query($page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      media(search: $search, type: ${type}, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
          native
        }
        description
        coverImage {
          extraLarge
          color
        }
        episodes
        chapters
        type
      }
    }
  }
`;

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