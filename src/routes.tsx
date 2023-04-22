import { NotFound } from "@layout/404";
import { Footer } from "@layout/footer";
import { paths } from "@utilities/constants";
import * as pages from "pages";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

export const Routes: React.FC = () => (
  <main className="flex flex-col overflow-x-hidden overflow-y-scroll space-y-8 pt-6 md:pt-0 dark:bg-gray-900 sm:dark:bg-gray-900">
    <ReactRouterRoutes>
      <Route path={paths.home} element={<pages.Home />} />
      <Route path="*" element={<NotFound />} />
    </ReactRouterRoutes>
    <Footer />
  </main>
);