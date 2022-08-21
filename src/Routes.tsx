import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import PopularAnime from "./layout/popular-anime";
import Home from "./pages/home";
import { paths } from "./utilities/constants";
// import AddAlarm from "./pages/Alarm/Add"



export default function () {
  return (
    <VStack
      as={"main"}
      gridArea={"main"}
      spacing={6}
      py={6}
    >
      <Routes>
        <Route path={paths.home} element={<Home />} />
      </Routes>
    </VStack>
  )
}