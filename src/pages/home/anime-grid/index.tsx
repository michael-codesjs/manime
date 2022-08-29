import { useMemo } from "react";
import { useQuery } from "react-query";
import { getTrending } from "../../../api/queries";
import Content from "./content";
import Skeletons from "./skeletons";



export default function TrendingAnime() {


  const {
    isLoading,
    isError,
    data
  } = useQuery(["trending", { page: 1, perPage: 10 }], getTrending, {
    enabled: true,
  });

  const memoizedSkeletons = useMemo(() => <Skeletons />,[]);
  const memoizedContent = useMemo(() => data && <Content data={data} />, [data]);

  return (
    <section className="w-full max-w-[660px] self-center min-h-[380px] md:h-[500px] grid grid-cols-6 grid-rows-8 gap-2 rounded-none">
      { isLoading &&  memoizedSkeletons }
      { memoizedContent }
    </section>
  )

};