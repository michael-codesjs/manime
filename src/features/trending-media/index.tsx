import { useQuery } from "react-query";
import { getTrendingMedia } from "../../api/queries/get-trending-media";
import Skeletons from "./skeletons";
import { useMemo } from "react";
import Anime from "./media";
import { MediaType } from "../../types/api";

type TrendingMediaProps = {
  type: MediaType;
};

export default function TrendingMedia(props: TrendingMediaProps) {
  const { type } = props;
  const { isLoading, data } = useQuery(
    [`trending-${type}`, { type, page: 1, perPage: 5 }],
    getTrendingMedia,
    {
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchInterval: 0,
      retry: 3,
      retryOnMount: true,
      retryDelay: 0,
      refetchOnWindowFocus: false,
    }
  );

  const memoizedContent = useMemo(() => {
    return (
      data &&
      data.media!.map((media) => {
        return <Anime key={media?.id.toString()} media={media!} />;
      })
    );
  }, [data]);

  return (
    <div className="vstack space-y-6">
      <div className="w-full flex space-x-4 justify-between items-center">
        <h2 className="w-full text-lg font-semibold dark:text-gray-100 capitalize">
          Trending {type.toLowerCase()}
        </h2>
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
          gap-y-4
        `}
      >
        {memoizedContent}
        {isLoading && <Skeletons />}
      </div>
    </div>
  );
}
