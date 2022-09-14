import React from "react";
import { AiOutlineMenu  } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { navigationIsOpenAtom } from "../../data/atoms";

export default function HamburgerButton() {

  const setNavigationIsOpen = useSetRecoilState(navigationIsOpenAtom);

  return (
    <button
      aria-label="menu-button"
      className={`
      w-9
      h-9
      flex
      items-center
      justify-center
      rounded-lg
      bg-gray-200
      text-gray-700
      dark:bg-gray-800
      dark:text-white
      dark:border-0
      hover:bg-gray-200
      dark:hover:bg-gray-700
      sm:hidden
      `}
      onClick={() => setNavigationIsOpen(isOpen => !isOpen)}
    > <AiOutlineMenu /> </button>
  )
}