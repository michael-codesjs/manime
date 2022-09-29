import SidePanelable from "../../components/miscellanous/side-panelable";
import { PopularMedia } from "../../features/popular-media";
import { MediaType } from "../../types/api";
import Carousel from "./carousel";
import TrendingMedia from "../../features/trending-media";

export default function Home() {
  return (
    <>
      <Carousel />
      <TrendingMedia type={MediaType.Anime} />
      <SidePanelable
        breakpoint="md"
        children={<PopularMedia type={MediaType.Anime} />}
      />
      <TrendingMedia type={MediaType.Manga} />
      <SidePanelable
        breakpoint="md"
        children={<PopularMedia type={MediaType.Manga} />}
      />
    </>
  );
}
