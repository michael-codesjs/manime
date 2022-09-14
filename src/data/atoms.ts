import { atom } from "recoil";
import { withLocalPersistEffect } from "./atom-effects";

function changeColorMode(value: "light" | "dark" | null) {
  const root = document.documentElement;
  if(value === "dark") {
    root.classList.add("dark");
    root.classList.remove("light")
  } else {
    root.classList.remove("dark");
    root.classList.add("light")
  }
  return value;
}

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