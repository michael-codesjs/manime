import { useBreakpointValue } from "@chakra-ui/react";
import { createPortal } from "react-dom";
import { PopularAnime as GenericPopularAnime } from "../../features/anime/popular-anime";
import { useSidePanel } from "../../hooks/use-side-panel";


export default function PopularAnime() {

  useSidePanel(); // will cause a re-render when the side-panel finally renders.
  
  const container = document.getElementById("side-panel");

  return useBreakpointValue(
    // render the popular anime in the side-panel on larger screens
    { base: <GenericPopularAnime />, md: container ? createPortal(<GenericPopularAnime />, container) : <></> },
    { ssr: false }
  )!;

}