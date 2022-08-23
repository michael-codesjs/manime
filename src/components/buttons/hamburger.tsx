import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { navigationIsOpenAtom } from "../../data/atoms";

export default function HamburgerButton() {

  const setNavigationIsOpen = useSetRecoilState(navigationIsOpenAtom);

  return (
    <IconButton
      aria-label="menu-button"
      icon={<HamburgerIcon />}
      size={"sm"}
      onClick={() => setNavigationIsOpen(isOpen => !isOpen)}
      display={{
        base: "block",
        sm: "none"
      }}
    />
  )
}