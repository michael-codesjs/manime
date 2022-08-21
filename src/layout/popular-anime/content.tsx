import { Fragment } from "react";
import { UseInfiniteQueryResult } from "react-query";
import { Page } from "../../types/api";
import { Anime } from "./anime";

type InfiniteQueryResult = UseInfiniteQueryResult<Page, any>;

type Props = {
  data: InfiniteQueryResult["data"],
  hasNextPage: InfiniteQueryResult["hasNextPage"],
  fetchNextPage: InfiniteQueryResult["fetchNextPage"]
}

export default function Content(props: Props) {

  const data = props.data!; // isLoading == false at this point and data is not undefined;

  return (
    <>
      {
        data.pages.map(page => {
          return (
            <Fragment key={page.pageInfo!.currentPage}>
              {
                page.media!.map((media) => {
                  return (
                    <Anime media={media!} />
                  )
                })
              }
            </Fragment>
          )
        })
      }
    </>
  )
}