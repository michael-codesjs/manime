import TrendingAnime from "../../features/anime/trending";
import TrendingManga from "../../features/manga/trending";
import Carousel from "./carousel";
import PopularAnime from "./popular-anime";
import PopularManga from "./popular-manga";

export default function Home() {

  return (
    <>
      <Carousel />
      <TrendingAnime />
      <PopularAnime />
      <TrendingManga />
      <PopularManga />
    </>
  )

}