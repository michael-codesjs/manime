import { useMemo, useState } from "react";
import { UseQueryResult } from "react-query";
import { Page } from "../../../types/api";
import { Anime } from "./anime";

type QueryResult = UseQueryResult<Page, any>;

type Props = {
  data: QueryResult["data"]
}
export default function Content(props: Props) {

  const data = props.data!;

  return (
    <>
      <Anime media={data.media![1]!} className="col-span-3 row-span-2 rounded-none" />
      <Anime media={data.media![2]!} className="col-span-3 row-span-2 rounded-none" />
      <Anime media={data.media![0]!} className="col-span-4 row-span-3 rounded-none" />
      <Anime media={data.media![3]!}  className="col-span-2 row-span-2 rounded-none" />
      <Anime media={data.media![4]!}  className="col-span-2 row-span-2 rounded-none" />
      <Anime media={data.media![5]!}  className="col-span-2 row-span-2 rounded-none" />
      <Anime media={data.media![6]!}  className="col-span-2 row-span-2 rounded-none" />
      <Anime media={data.media![7]!}  className="col-span-2 -row-span-1 rounded-none" />
    </>
  );

}