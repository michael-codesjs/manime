import { createPortal } from "react-dom";
import { PopularManga as BasePopularManga } from "../../features/manga/popular";
import useBreakpointValue from "../../hooks/media/use-breakpoint-value";
import { useSidePanel } from "../../hooks/use-side-panel";


export default function PopularManga() {

  useSidePanel(); // will cause a re-render when the side-panel finally renders.

  const container = document.getElementById("side-panel");

  return useBreakpointValue({
    base: <BasePopularManga />,
    // render popular anime in the side-panel on larger screens
    md: container ? createPortal(<BasePopularManga />, container) : null
  })!

}