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

  const [cover, setCover] = useState(data.media![0]);

  const anime = useMemo(() => {
    return data.media!.map((media) => {
      return <Anime key={media!.id} media={media!} />
    })
  }, [data]);

  return (
    <>
      <div className="w-full grid gap-x-4 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        { anime }
      </div>
    </>
  );

}