import { useQuery } from "react-query";
import { getTrending } from "../../../api/queries/get-trending-anime";
import Skeletons from "./skeletons";
import { useMemo } from "react";
import Anime from "./anime";
import { HiArrowRight } from "react-icons/hi";
import { getTrendingManga } from "../../../api/queries/get-trending-manga";



export default function TrendingManga() {

  const {
    isLoading,
    data,
  } = useQuery(["trending-manga", { page: 1, perPage: 5 }], getTrendingManga, {
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

  return (
    <div className="vstack space-y-6">
      <div className="w-full flex space-x-4 justify-between items-center">
        <h2 className="w-full text-lg font-semibold dark:text-gray-100">Trending Manga</h2>
        <p className="text-blue-600 text-sm underline font-medium"> more </p>
      </div>
      <div
        className={`
          w-full
          grid
          grid-cols-2
          semi-sm:grid-cols-3
          md:grid-cols-3
          lg:grid-cols-5
          gap-x-4
          gap-y-6
        `}
      >
        {memoizedContent}
        {isLoading && <Skeletons />}
      </div>
    </div>
  )

}