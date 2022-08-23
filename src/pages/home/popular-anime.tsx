import { useBreakpointValue } from "@chakra-ui/react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil"
import { sidePanelDidRenderAtom } from "../../data/atoms"
import { PopularAnime as GenericPopularAnime } from "../../features/anime/popular-anime";


export default function PopularAnime() {

  useRecoilValue(sidePanelDidRenderAtom); // will cause a re-render when the side panel finally renders and it's ready to be used as a.
  
  const container = document.getElementById("side-panel");

  return useBreakpointValue(
    { base: <GenericPopularAnime />, md: container ? createPortal(<GenericPopularAnime />, container) : <></> }, // render the popular anime in the side-panel on larger screens
    { ssr: false }
  )!;

}