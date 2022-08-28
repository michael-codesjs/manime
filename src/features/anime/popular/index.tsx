import { useMemo } from "react";
import { useQuery } from "react-query";
import { getPopular } from "../../../api/queries";
import SeeMoreButton from "../../../components/buttons/see-more";
import ScrollFade from "../../../components/scroll-fade";
import { Anime } from "./anime";
import Skeletons from "./skeletons";

export function PopularAnime() {

  const {
    isLoading,
    data,
  } = useQuery(["popular-anime", { page: 1, perPage: 8 }], getPopular, {
    enabled: true,
    cacheTime: Infinity,
    refetchOnMount: false,
    notifyOnChangeProps: [
      "isLoading",
      "data",
      "isError"
    ],
    refetchInterval: 0,
    retry: 3,
    retryOnMount: true,
    retryDelay: 0,
    refetchOnWindowFocus: false
  });

  const memoizedContent = useMemo(() => {
    return data && data.media!.map((media) => {
      return (
        <Anime key={media?.id.toString()} media={media!} />
      )
    })
  }, [data]);

  const memoizedSkeletons = useMemo(() => {
    return isLoading && <Skeletons />;
  }, [isLoading]);

  return (
    <section className="w-full p-0 vstack space-y-4 md:space-y-0">

      <h2 className="w-full px-7 md:px-0 text-lg font-semibold">Popular Anime</h2>

      <div className="flex flex-row md:flex-col space-x-6 md:space-x-0 md:space-y-3 w-full relative">
        <div className="flex flex-row md:flex-col items-center w-full overflow-x-scroll md:overflow-x-hidden px-7 md:px-0 space-x-0 md:space-y-3">

          <ScrollFade
            // scroll fade that is on the left for small screens
            height={"full"}
            width={7}
            direction={"right"}
            style={{
              transform: "translateX(-" + (7 * 4) + "px)",
              position: "absolute"
            }}
            className={"md:hidden"}
          />

          <div className={"flex flex-row md:flex-col md:h-[240px] md:w-full md:overflow-scroll md:pb-8 space-x-6 md:space-x-0 md:space-y-5 p-[1px]"}>
            {memoizedContent}
            {memoizedSkeletons}
          </div>

          <SeeMoreButton />

        </div>

        <ScrollFade
          // scroll fade that is on the right for small screens
          height={"full"}
          width={7}
          direction={"left"}
          style={{
            right: 0,
            bottom: 0
          }}
          className={"md:hidden"}
        />

        <ScrollFade
          // scroll fade that is at the bottom for larger screens
          height={8}
          width={"full"}
          direction={"top"}
          style={{
            bottom: "46px"
          }}
          className={"hidden md:block"}
        />

      </div>

    </section>
  )
}