import { atom } from "recoil";
import { Page } from "../types/api";

export const navigationIsOpenAtom = atom<boolean>({
  key: "navigation-is-open",
  default: false,
});

export const sidePanelDidRenderAtom = atom<boolean>({
  key: "side-panel-portal-container",
  default: false
});