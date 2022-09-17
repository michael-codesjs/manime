import TrendingAnime from "../../features/anime/trending";
import Carousel from "./carousel";
import PopularAnime from "./popular-anime";

export default function Home() {

  return (
    <>
      <Carousel />
      <TrendingAnime />
      <PopularAnime />
    </>
  )

}