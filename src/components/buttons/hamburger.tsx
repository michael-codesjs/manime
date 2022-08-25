import React from "react";
import { AiOutlineMenu  } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { navigationIsOpenAtom } from "../../data/atoms";

export default function HamburgerButton() {

  const setNavigationIsOpen = useSetRecoilState(navigationIsOpenAtom);

  return (
    <button
      aria-label="menu-button"
      className="py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 sm:hidden"
      onClick={() => setNavigationIsOpen(isOpen => !isOpen)}
    > <AiOutlineMenu /> </button>
  )
}