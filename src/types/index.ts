import { breakpoints } from "../utilities/constants";
import { Page } from "./api";

export type ColorMode = "light" | "dark";
export type Season = "SPRING" | "WINTER" | "SUMMER" | "FALL";

export type Breakpoints = keyof typeof breakpoints;

export type PageResult = {
  data: {
    Page: Page
  }
};


export type AuthenticationAction = "Login" | "Sign Up";