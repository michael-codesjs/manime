import { Fragment, Profiler, useMemo } from "react";
import { UseInfiniteQueryResult, UseQueryResult } from "react-query";
import { Page } from "../../../types/api";
import { Anime } from "./anime";

type QueryResult = UseQueryResult<Page, any>;

type Props = {
  data: QueryResult["data"],
}

export function Content(props: Props) {

  const data = props.data!; // isLoading == false at this point and data is not undefined;
  const animes = useMemo(() => {
    return data.media!.map((media) => {
      return (
        <Anime key={media!.id} media={media!} />
      )
    })
  },[data]);

  return (
    <>
      { animes }
    </>
  )
}