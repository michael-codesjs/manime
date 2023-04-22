import SidePanelable from "../../components/miscellanous/side-panelable";
import { PopularMedia } from "../../features/popular-media";
import { MediaType } from "../../types/api";
import Carousel from "./carousel";
import TrendingMedia from "../../features/trending-media";
import { FullLogo } from "../../components/brand";
import Landing from "./landing";

export const Home = () => {
  return (
    <>
      <Landing />
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
