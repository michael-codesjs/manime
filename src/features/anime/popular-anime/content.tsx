import { Fragment, Profiler } from "react";
import { UseInfiniteQueryResult } from "react-query";
import { Page } from "../../../types/api";
import { Anime } from "./anime";

type InfiniteQueryResult = UseInfiniteQueryResult<Page, any>;

type Props = {
  data: InfiniteQueryResult["data"],
}

export function Content(props: Props) {

  const data = props.data!; // isLoading == false at this point and data is not undefined;

  return (
    <>
      <Profiler
        id={"popular-anime-card-profiler"}
        onRender={(...args) => {
          const [,phase] = args;
          // console.log(phase);
        }}
      >
        {
          data.pages.map((page,i) => {
            return (
              <Fragment key={i}>
                {
                  page.media!.map((media) => {
                    return (
                      <Anime key={media!.id} media={media!} />
                    )
                  })
                }
              </Fragment>
            )
          })
        }
      </Profiler>
    </>
  )
}