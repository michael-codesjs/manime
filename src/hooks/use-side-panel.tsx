import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil";
import { sidePanelDidRenderAtom } from "../data/atoms";

export function useSidePanel() {

  // will cause a re-render of the component using it on larger devices when the side-panel is rendered  & ready to be used as a portal.
  
  const sidePanelDidRender = useRecoilValue(sidePanelDidRenderAtom);
  const [rendered, setRendered] = useState(false);
  
  const isDesktop = window.innerWidth > 960 // 60em which is the md breakpoint;

  useEffect(() => {
    if(isDesktop && sidePanelDidRender) {
      setRendered(true);
    }
  },[sidePanelDidRender]);

  return rendered;

}