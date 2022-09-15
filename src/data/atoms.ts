import { atom } from "recoil";
import { withLocalPersistEffect } from "./atom-effects";
import { changeColorMode } from "../utilities/functions";

export const colorModeAtom = atom<"light" | "dark" | null>({
  key: "color-mode",
  default: null,
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