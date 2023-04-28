import { Media, MediaType, Page } from "@typings/api";
import { PageResult, Season } from "@typings/index";
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { getCurrentSeason } from "@utilities/functions";
import { API } from "aws-amplify";
import { useCallback } from "react";
import { QueryFunction, useQuery, UseQueryResult } from "react-query";

type UseTrendingMediaParams = {
  type: MediaType,
  season?: Season,
  year?: string,
  props: {
    media: any // any for now, will come back and properly type this
  }
};

type UseTrendingMedia = (params: UseTrendingMediaParams) => UseQueryResult<Page>;

export const useTrendingMedia: UseTrendingMedia = (params) => {

  const queryFn: QueryFunction<Page, [string, { page: number, perPage: number }]> = useCallback(async (context) => {

    let { season, year, props, type } = params;

    if (!season) season = getCurrentSeason();
    if (!year) {
      const date = new Date();
      date.setFullYear(date.getFullYear() - 2);
      year = year || new Date().getFullYear().toString();
    }

    const { page, perPage } = context.queryKey[1];

    const query = getGraphQLQuery({ type, season, year, props });
    const variables = { page, perPage };
    
    const result = await API.graphql({ query, variables }) as PageResult;

    return result.data.Page;

  }, [params]);

  const queryResult = useQuery(["home-trending", { page: 1, perPage: 12 }], queryFn, {
    enabled: true,
  });

  return queryResult;

}

const getGraphQLQuery = (params: { type: MediaType, season: string, year: string, props: UseTrendingMediaParams["props"] }) => {
  const { type, season, year, props } = params;
  return `
    query($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        media(search: $search, type: ${type}, season:${season}, seasonYear:${year}, sort: POPULARITY_DESC) {
          ${jsonToGraphQLQuery(props.media, { pretty: false })}
        }
      }
    }
  `;
}