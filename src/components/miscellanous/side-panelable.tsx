import { ReactNode } from "react";
import { createPortal } from "react-dom";
import useBreakpointValue from "../../hooks/media/use-breakpoint-value";
import { useSidePanel } from "../../hooks/use-side-panel";
import { Breakpoints } from "../../types"

type Props = {
  children: React.ReactElement,
  breakpoint: Breakpoints
}
export default function SidePanelable(props: Props) {

  // portals provided children in the sidepanel upon reaching/exceeding the provided breakpoint

  const { breakpoint, children } = props;

  useSidePanel(breakpoint); // will cause a re-render when the side-panel finally renders.

  const container = document.getElementById("side-panel");

  return useBreakpointValue({
    base: children,
    [breakpoint]: container ? createPortal(children, container) : null
  })!;

}