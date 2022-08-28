import { useEffect, useTransition } from "react";
import { useSetRecoilState } from "recoil";
import { sidePanelDidRenderAtom } from "../../data/atoms";

export default function SidePanel() {

  /*
   * notify other components when this component is painted/ready to be used as a portal.
   */

  const setSidePanelDidRender = useSetRecoilState(sidePanelDidRenderAtom);
  const [,startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setSidePanelDidRender(true);
    });
  },[startTransition]);

  return (
    <aside
      id={"side-panel"}
      className={`
        justify-start
        px-6
        border-l-[1px]
        space-y-8
        overflow-y-scroll
      `}
    />
  )

}