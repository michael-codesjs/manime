import { API } from "aws-amplify";
import { QueryFunctionContext } from "react-query";
import { PageResult } from "../../types";
import { Page } from "../../types/api";

export const getTrending = async (context: QueryFunctionContext<[string, { page: number, perPage: number }]>) => {
  
const date = new Date();
date.setFullYear(date.getFullYear()-2);
const fuzzyStartDate = date.getFullYear()+date.getDate()+date.getDay(); // only get recent anime

const GRAPHQL_QUERY = `
  query($page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        lastPage
        hasNextPage
      }
      media(search: $search, type: ANIME, sort: TRENDING_DESC) {
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
        trailer {
          id
          thumbnail
          site
        }
        season
        seasonYear
        episodes
        type
        genres
      }
    }
  }
`;


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