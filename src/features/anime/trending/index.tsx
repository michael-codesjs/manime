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
    <section className="w-full vstack space-y-8">
      { isLoading && memoizedSkeletons }
      { memoizedContent }
    </section>
  )

};