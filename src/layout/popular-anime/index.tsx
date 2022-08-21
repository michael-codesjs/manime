import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";
import { homeDidRenderAtom } from "../../data/atoms";
import View from "./view";

export default function PopularAnime() {

  useRecoilValue(homeDidRenderAtom); // trigger re-render when home renders.
  // you'll have to do the same for any other portal container whose existence depends on a specific route

  const containers = {
    main: document.getElementById("popular-anime-portal-container-main"),
    sidePanel: document.getElementById("popuplar-anime-portal-container-side-panel")
  };

  const container = useBreakpointValue(
    { base: containers.main, md: containers.sidePanel },
    { ssr: false }
  );


  return container ? createPortal(<View />, container) : <></>;

}