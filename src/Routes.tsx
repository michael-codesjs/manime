import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { paths } from "./utilities/constants";
// import AddAlarm from "./pages/Alarm/Add"


export default function () {
  return (
    <main className="flex flex-col overflow-x-hidden overflow-y-scroll space-y-8 py-6 md:pt-0 dark:bg-gray-900">
      <Routes>
        <Route path={paths.home} element={<Home />} />
      </Routes>
    </main>
  )
}