import { useBreakpointValue } from "@chakra-ui/react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil"
import { sidePanelDidRenderAtom } from "../../data/atoms"
import { PopularAnime as GenericPopularAnime } from "../../features/anime/popular-anime";


export default function PopularAnime() {

  return <GenericPopularAnime />

}