import { VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { sidePanelDidRenderAtom } from "../../data/atoms";

export default function SidePanel() {

  /*
   * we'll need to let other components know when we have been rendered.
   * this is so that they can use the portal container.
   */

  const setSidePanelDidRender = useSetRecoilState(sidePanelDidRenderAtom);

  useEffect(() => {
    setSidePanelDidRender(true);
  },[]);

  return (
    <VStack
      as="aside"
      gridArea="side-panel"
      id={"side-panel"}
      justify="start"
      px={6}
      spacing={8}
      borderLeftWidth={{
        base: "0px",
        md: "1px"
      }}
      overflowY={{
        md: "scroll"
      }}
    />
  )

}