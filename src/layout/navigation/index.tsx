
import React, { useMemo } from "react";
import { Text, useBreakpointValue, useColorModeValue, VStack } from "@chakra-ui/react";
import NavigationItem from "./item";
import { IoIosHome } from "react-icons/io";
import { AiOutlineHome, AiOutlineGlobal, AiOutlineSound, AiOutlineBook, AiOutlineClockCircle, AiOutlineDownload } from "react-icons/ai";
import { MdOndemandVideo, MdVideoLibrary } from "react-icons/md";
import { paths } from "../../utilities/constants";
import { useRecoilState } from "recoil";
import { navigationIsOpenAtom } from "../../data/atoms";

export default function Navigation() {

  const [navigationIsOpen, setNavigationIsOpen] = useRecoilState(navigationIsOpenAtom);

  const navigationItems = {

    menu: {
      home: { address: paths.home, icon: AiOutlineHome },
      community: { address: paths.community, icon: AiOutlineGlobal },
      speakers: { address: paths.speakers, icon: AiOutlineSound }
    },

    categories: {
      anime: { address: paths.anime, icon: MdVideoLibrary },
      manga: { address: paths.manga, icon: AiOutlineBook },
      movie: { address: paths.movies, icon: MdOndemandVideo }
    },

    library: {
      recent: { address: paths.recent, icon: AiOutlineClockCircle },
      downloaded: { address: paths.downloaded, icon: AiOutlineDownload }
    }

  };

  const mainTextColor = useColorModeValue("gray.900", "gray.100");

  const NAVIGATION_CONTENT = useMemo(() => {
    return Object.entries(navigationItems).map(([subNavigation, items]) => {
      return (
        <VStack
          justify={"start"}
          align={"start"}
          spacing={7}
          pl={8}
          width={"full"}
        >
          <Text
            fontSize={"sm"}
            color={mainTextColor}
            fontWeight={"semibold"}
            textTransform={"uppercase"}
          > {subNavigation} </Text>

          <VStack
            width={"full"}
            height={"full"}
            justify={"start"}
            align={"start"}
            spacing={3}
          >
            {
              Object.entries(items).map(([name, args]) => {
                return (
                  <NavigationItem name={name} {...args} />
                )
              })
            }
          </VStack>

        </VStack>
      )
    })
  }, [navigationItems]);

  return (
    <VStack
      minW={"220px"}
      width={"220px"}
      position={{
        base: "fixed",
        md: "relative",
      }}
      top={0}
      right={{
        base: navigationIsOpen ? 0 : "-250px",
        md: 0
      }}
      bg={useColorModeValue("white","gray.900")}
      transition={"all"}
      transitionDuration={"0.3s"}
      py={6}
      height={"full"}
      justify={"start"}
      spacing={8}
      borderRightWidth={"1px"}
    >
      {NAVIGATION_CONTENT}
    </VStack>
  )

}