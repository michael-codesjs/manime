import { atom } from "recoil";
import { withLocalPersistEffect } from "./atom-effects";
import { changeColorMode } from "../utilities/functions";
import { AuthenticationAction } from "../types";

export const colorModeAtom = atom<"light" | "dark">({
  key: "color-mode",
  default: "light",
  effects: [
    withLocalPersistEffect({
      onLocalStorageGetItem: changeColorMode
    }),
    ({ onSet }) => {
      onSet(value => changeColorMode(value))
    }
  ]
});

export const navigationIsOpenAtom = atom<boolean>({
  key: "navigation-is-open",
  default: false,
});

export const sidePanelDidRenderAtom = atom<boolean>({
  key: "side-panel-portal-container",
  default: false
});