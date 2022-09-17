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
        py-0
        border-l-2
        dark:border-gray-800
        space-y-8
        overflow-hidden
        dark:bg-gray-900
      `}
    />
  )

}