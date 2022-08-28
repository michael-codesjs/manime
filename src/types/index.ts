import { breakpoints } from "../utilities/constants";
import { Page } from "./api";

export type Breakpoints = keyof typeof breakpoints;

export type PageResult= {
  data: {
    Page: Page
  }
};

