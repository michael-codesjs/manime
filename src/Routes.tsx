import { VStack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { paths } from "./utilities/constants";
// import AddAlarm from "./pages/Alarm/Add"


export default function () {
  return (
    <VStack
      as={"main"}
      gridArea={"main"}
      spacing={5}
      py={{
        base: 6,
        md: 0
      }}
    >
      <Routes>
        <Route path={paths.home} element={<Home />} />
      </Routes>
    </VStack>
  )
}