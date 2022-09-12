import { API } from "aws-amplify";
import { QueryFunctionContext } from "react-query";
import { PageResult } from "../../types";
import { getCurrentSeason } from "../../utilities/functions";

export const getTrending = async (context: QueryFunctionContext<[string, { page: number, perPage: number, season?:boolean, seasonYear?:number }]>) => {
  
const date = new Date();
date.setFullYear(date.getFullYear()-2);
const fuzzyStartDate = date.getFullYear()+date.getDate()+date.getDay(); // only get recent anime

const season = getCurrentSeason();
const year = new Date().getFullYear();

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
        status
        season
        chapters
        seasonInt
        description
        genres
        status
        isAdult
        averageScore
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
        isAdult
        tags {
          name
          id
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
        characters(sort: RELEVANCE, perPage: 5) {
          nodes {
            id
            name {
              full
              native
            }
            image {
              large
              medium
            }
          }
        }
        studios(isMain: true) {
          nodes {
            id
            name
          }
        }
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