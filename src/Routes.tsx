import { VStack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { paths } from "./utilities/constants";
// import AddAlarm from "./pages/Alarm/Add"


export default function () {
  return (
    <main className="vstack space-y-5 py-6 md:py-0">
      <Routes>
        <Route path={paths.home} element={<Home />} />
      </Routes>
    </main>
  )
}