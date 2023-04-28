import { useTrendingMedia } from "@repositories/use-seasonal-trending-media";
import { useMemo } from "react";
import { MediaType } from "../../../../types/api";
import Content from "./content";
import queryProps from "./query-props.json";
import Skeletons from "./skeletons";

export const SeasonalTrending: React.FC = () => {

  const { isLoading, data } = useTrendingMedia({
    type: MediaType.Anime,
    props: queryProps
  });

  const memoizedSkeletons = useMemo(() => <Skeletons />, []);
  const memoizedContent = useMemo(() => data && <Content data={data} />, [data]);

  return (
    <section className="w-full space-y-4" id={"trending-this-season"}>
      <h2 className="w-full px-7 md:px-0 text-lg font-semibold dark:text-gray-100 capitalize">
        Trending This Season
      </h2>
      {isLoading && memoizedSkeletons}
      {memoizedContent}
    </section>
  );

};