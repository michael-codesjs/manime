import { HStack, Icon, Text, } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdAlarm } from "react-icons/io"
import { AiOutlineClockCircle } from "react-icons/ai"
import { useSetRecoilState } from "recoil";
import { navigationIsOpenAtom } from "../../data/atoms";

interface NavigationItemProps {
  name: string,
  address: string,
  icon: any
}

export const NAVIGATION_ICONS = [IoMdAlarm, AiOutlineClockCircle]


export default function NavigationItem({ name, address, icon }: NavigationItemProps): React.ReactElement {

  const setNavigationIsOpen = useSetRecoilState(navigationIsOpenAtom);

  const { pathname } = useLocation();
  const isActive = pathname === address;

  /* postLinkClick: on mobile devices, you'll want to close the navigation when a link is clicked */
  const postLinkClick = () => {
    setNavigationIsOpen(false);
  };

  return (
    <Link
      to={address}
      onClick={postLinkClick}
      className={"hstack space-x-5 w-full items-center justify-center relative "+(isActive ? "text-red-600" : "text-gray-700")}
    >
      { icon }
      <p className={"w-full text-[13px] capitalize text-inherit "+(isActive ? "font-semibold" : "font-normal")}> {name} </p>

    </Link>
  )
}