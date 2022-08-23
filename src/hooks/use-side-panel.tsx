import { useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil";
import { sidePanelDidRenderAtom } from "../data/atoms";

export function useSidePanel() {

  // will cause a re-render of the component using it on larger devices when the side-panel is rendered  & ready to be used as a portal.
  
  const sidePanelDidRender = useRecoilValue(sidePanelDidRenderAtom);
  const [rendered, setRendered] = useState(false);
  
  const isDesktop = useBreakpointValue({
    base: false,
    md: true
  });

  useEffect(() => {
    if(isDesktop && sidePanelDidRender) {
      setRendered(true);
    }
  },[sidePanelDidRender]);

  return rendered;

}