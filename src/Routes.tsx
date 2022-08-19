import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { paths } from "./utilities/constants";
// import AddAlarm from "./pages/Alarm/Add"



export default function () {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
    </Routes>
  )
}