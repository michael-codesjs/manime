import SidePanelable from "@components/miscellanous/side-panelable";
import { PopularMedia } from "../../features/popular-media";
import TrendingMedia from "../../features/trending-media";
import { MediaType } from "../../types/api";
import { SeasonalTrending } from "./partials/seasonal-trending";

export const Home = () => {
  return (
    <>
      <SeasonalTrending />
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
