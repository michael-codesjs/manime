import { atom } from "recoil";
import { withLocalPersistEffect } from "./atom-effects";

export const colorModeAtom = atom<"light" | "dark">({
  key: "color-mode",
  default: "light",
  effects: [
    withLocalPersistEffect(),
    ({ onSet }) => {
      onSet(value => {
        const root = document.documentElement;
        if(value === "dark") { // https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
          root.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      })
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