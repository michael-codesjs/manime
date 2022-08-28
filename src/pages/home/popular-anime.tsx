import { createPortal } from "react-dom";
import { PopularAnime as BasePopularAnime } from "../../features/anime/popular";
import useBreakpointValue from "../../hooks/media/use-breakpoint-value";
import { useSidePanel } from "../../hooks/use-side-panel";


export default function PopularAnime() {

  useSidePanel(); // will cause a re-render when the side-panel finally renders.

  const container = document.getElementById("side-panel");

  return useBreakpointValue({
    base: <BasePopularAnime />,
    // render popular anime in the side-panel on larger screens
    md: container ? createPortal(<BasePopularAnime />, container) : null
  })!

}