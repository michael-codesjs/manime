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
        grid
        grid-rows-2
        px-6
        md:pb-12
        border-l-2
        dark:border-gray-800
        md:gap-[46px]
        overflow-hidden
        dark:bg-gray-900
      `}
    />
  )

}