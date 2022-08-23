import { useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TrendingAnime from "../../features/anime/trending";
import PopularAnime from "./popular-anime";

export default function Home() {

  return (
    <>
      {/* <TrendingAnime /> */ }
      <PopularAnime />
    </>
  )

}