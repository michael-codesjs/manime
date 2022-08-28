
import React, { useMemo } from "react";
import { Box, Flex, HStack, IconButton, Spacer, Text, VStack } from "@chakra-ui/react";
import NavigationItem from "./item";
import { AiOutlineHome, AiOutlineGlobal, AiOutlineSound, AiOutlineBook, AiOutlineClockCircle, AiOutlineDownload } from "react-icons/ai";
import { MdOndemandVideo, MdVideoLibrary } from "react-icons/md";
import { paths } from "../../utilities/constants";
import { useRecoilState } from "recoil";
import { navigationIsOpenAtom } from "../../data/atoms";
import { CloseIcon } from "@chakra-ui/icons";

export default function Navigation() {

  const [navigationIsOpen, setNavigationIsOpen] = useRecoilState(navigationIsOpenAtom);

  const navigationItems = useMemo(() => {
    const iconProps = {
      className: "text-xl"
    }
    return {
      menu: {
        home: { address: paths.home, icon: <AiOutlineHome {...iconProps} /> },
        community: { address: paths.community, icon: <AiOutlineGlobal {...iconProps} /> },
        speakers: { address: paths.speakers, icon: <AiOutlineSound {...iconProps} /> }
      },

      categories: {
        anime: { address: paths.anime, icon: <MdVideoLibrary {...iconProps} /> },
        manga: { address: paths.manga, icon: <AiOutlineBook {...iconProps} /> },
        movie: { address: paths.movies, icon: <MdOndemandVideo {...iconProps} /> }
      },

      library: {
        recent: { address: paths.recent, icon: <AiOutlineClockCircle {...iconProps} /> },
        downloaded: { address: paths.downloaded, icon: <AiOutlineDownload {...iconProps} /> }
      }

    }
  }, []);

  const NAVIGATION_CONTENT = useMemo(() => {
    return Object.entries(navigationItems).map(([subNavigationItem, subNavigationItems]) => {
      return (
        <div
          key={subNavigationItem}
          className="flex vstack space-y-8 w-full pl-8"
        >
          <p className="text-sm text-gray-900 font-semibold uppercase"> {subNavigationItem} </p>
          <div className="w-full h-full vstack space-y-2">
            {
              Object.entries(subNavigationItems).map(([name, args]) => {
                return (
                  <NavigationItem key={name} name={name} {...args} />
                )
              })
            }
          </div>

        </div>
      )
    })
  }, [navigationItems]);

  return (
    <div
      id="navigation"
      className={"border-l fixed sm:relative top-0 left-0 bottom-0 right-0 bg-red sm:z-[1] sm:py-6 sm:opacity-100 sm:border-r " + (navigationIsOpen ? "z-10 opacity-100" : "-z-10 opacity-0")}
    >

      <div
       // OVERLAY
        className={"overlay w-full h-full sm:hidden backdrop-blur-sm bg-blackAlpha transition-all " + (navigationIsOpen ? "opacity-100" : "opacity-0")}
        onClick={
          () => setNavigationIsOpen(false)
        }
      />

      <nav
        className={"w-[300px] sm:w-full h-full vstack space-y-8 fixed sm:relative top-0 sm:right-0 bg-white transition-all " + (navigationIsOpen ? "right-0" : "-right-[300px]")}
      >

        {NAVIGATION_CONTENT}

        <div className="hstack w-full sm:hidden -order-1 px-6">
          <div className="w-full" />
          <button
            aria-label="close-navigation-button"
            className="p-1 text-5xl font-medium"
            onClick={() => setNavigationIsOpen(false)}
          > &times; </button>
        </div>

      </nav>

    </div>
  )

}