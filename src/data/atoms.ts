import { atom } from "recoil";


export const navigationIsOpenAtom = atom<boolean>({
  key: "navigation-is-open",
  default: false,
});

export const homeDidRenderAtom = atom<boolean>({
  key: "home-did-render",
  default: false
});