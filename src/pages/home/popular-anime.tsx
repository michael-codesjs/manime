import { useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil"
import { sidePanelDidRenderAtom } from "../../data/atoms"
import { PopularAnime as GenericPopularAnime } from "../../features/anime/popular-anime";
import { useSidePanel } from "../../hooks/use-side-panel";


export default function PopularAnime() {

  const panel = useSidePanel();

  useEffect(() => {
    console.log("induced: ",panel);
  },[panel]);
  
  const container = document.getElementById("side-panel");

  return useBreakpointValue(
    { base: <GenericPopularAnime />, md: container ? createPortal(<GenericPopularAnime />, container) : <></> }, // render the popular anime in the side-panel on larger screens
    { ssr: false }
  )!;

}