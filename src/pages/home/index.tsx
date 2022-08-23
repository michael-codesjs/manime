import { useBreakpointValue } from "@chakra-ui/react";
import React, { Profiler, useEffect, useState } from "react";
import TrendingAnime from "../../features/anime/trending";
import { profilerCallBack } from "../../profilers";
import PopularAnime from "./popular-anime";

export default function Home() {

  return (
    <Profiler
      id={"home profiler"}
      onRender={profilerCallBack}
    >
      <PopularAnime />
    </Profiler>
  )

}