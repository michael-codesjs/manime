import { Route, Routes } from "react-router-dom";
import Footer from "./layout/footer";
import Home from "./pages/home";
import _404 from "./layout/404";
import { paths } from "./utilities/constants";
// import AddAlarm from "./pages/Alarm/Add"


export default function () {
  return (
    <main className="flex flex-col overflow-x-hidden overflow-y-scroll space-y-8 pt-6 md:pt-0 dark:bg-gray-900 sm:dark:bg-gray-900">
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path="*" element={<_404 />} />
      </Routes>
      <Footer />
    </main>
  )
}