import SidePanelable from "../../components/miscellanous/side-panelable";
import TrendingAnime from "../../features/anime/trending";
import { PopularMedia } from "../../features/popular-media";
import { MediaType } from "../../types/api";
import Carousel from "./carousel";

export default function Home() {

  return (
    <>
      <Carousel />
      <TrendingAnime />
      <SidePanelable
        breakpoint="md"
        children={<PopularMedia type={MediaType.Anime} />}
      />
      <SidePanelable
        breakpoint="md"
        children={<PopularMedia type={MediaType.Manga} />}
      />
    </>
  )

}