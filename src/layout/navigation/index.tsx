
import React, { useMemo } from "react";
import { Box, Flex, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import NavigationItem from "./item";
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
    return Object.entries(navigationItems).map(([subNavigationItem, subNavigationItems]) => {
      return (
        <VStack
          key={subNavigationItem}
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
          > {subNavigationItem} </Text>

          <VStack
            width={"full"}
            height={"full"}
            justify={"start"}
            align={"start"}
            spacing={3}
          >
            {
              Object.entries(subNavigationItems).map(([name, args]) => {
                return (
                  <NavigationItem key={name} name={name} {...args} />
                )
              })
            }
          </VStack>

        </VStack>
      )
    })
  }, [navigationItems]);

  return (
    <Flex
      gridArea={"nav"}
      borderRightWidth={"1px"}
      position={{
        base: "absolute",
        sm: "relative"
      }}
      top={0}
      bottom={0}
      left={0}
      right={0}
      overflow={"hidden"}
      backdropFilter={"blur(2px)"}
      zIndex={{
        base: navigationIsOpen ? 10 : -1,
        sm: 1
      }}
      opacity={{
        base: navigationIsOpen ? 1 : 0,
        sm: 1
      }}
      transition={"all"}
      transitionDuration={"0.2s"}
    >

      <Box
        width={"full"}
        height={"full"}
        display={{ base: "block", sm: "none" }}
        bg={"blackAlpha.500"}
        onClick={
          () => setNavigationIsOpen(false)
        }
      />

      <VStack
        as={"nav"}
        width={{
          base: "280px",
          md: "full"
        }}
        height={"full"}
        py={6}
        spacing={8}
        justify={"start"}
        bg={{
          base: useColorModeValue("white", "gray.800"),
          sm: "none"
        }}
        position={{
          base: "fixed",
          sm: "relative"
        }}
        right={{
          base: navigationIsOpen ? "0px" : "-280px",
          sm: 0
        }}
        transition={{
          base: "all",
          sm: "none"
        }}
        transitionDuration={"0.3s"}
        onClick={
          // override onclick so it does not close when you click the inside.
          () => {
            console.log("override")
          }
        }
      >
        {NAVIGATION_CONTENT}
      </VStack>

    </Flex>
  )

}