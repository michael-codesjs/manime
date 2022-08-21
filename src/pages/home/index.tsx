import { Box } from "@chakra-ui/react";
import { useLayoutEffect } from "react";
import { useSetRecoilState } from "recoil";
import { homeDidRenderAtom } from "../../data/atoms";
import Trending from "./trending";


export default function Home() {

  const setHomeDidRender = useSetRecoilState(homeDidRenderAtom);

  useLayoutEffect(() => {
    setHomeDidRender(true);
    return () => setHomeDidRender(false); // set to force when component is removed
  }, [setHomeDidRender]);

  return (
    <>
      <Trending />
      <Box
        width={"full"}
        height={"auto"}
        p={0}
        id={"popular-anime-portal-container-main"}
      // popular animes are rendered here via a portal on mobile devices
      />
    </>
  )

}