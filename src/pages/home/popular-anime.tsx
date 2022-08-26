import { createPortal } from "react-dom";
import { PopularAnime as BasePopularAnime } from "../../features/anime/popular-anime";
import useBreakpointValue from "../../hooks/use-breakpoint-value";
import { useSidePanel } from "../../hooks/use-side-panel";


export default function PopularAnime() {

  const sidePanelDidRender = useSidePanel(); // will cause a re-render when the side-panel finally renders.

  const container = document.getElementById("side-panel");

  // render popular anime in the side-panel on larger screens
  const v = useBreakpointValue(
    { base: <BasePopularAnime />, md: container ? createPortal(<BasePopularAnime />, container) : <></> },
    { depends: [sidePanelDidRender] }  
  );

  // console.log(v);

  return v;

}