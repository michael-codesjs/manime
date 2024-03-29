import { useEffect, useTransition } from "react";
import { useSetRecoilState } from "recoil";
import { sidePanelDidRenderAtom } from "@data/atoms";

export const SidePanel: React.FC = () => {

  const setSidePanelDidRender = useSetRecoilState(sidePanelDidRenderAtom);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => setSidePanelDidRender(true));
  }, [startTransition, setSidePanelDidRender]);

  return (
    <aside
      id={"side-panel"}
      className="grid grid-rows-2 gap-y-10 px-6 md:pb-12 border-l-2 dark:border-gray-800 overflow-hidden dark:bg-gray-900"
    />
  )

}