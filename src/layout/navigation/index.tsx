import { navigationIsOpenAtom } from "@data/atoms";
import { paths } from "@utilities/constants";
import { useMemo } from "react";
import { AiOutlineClockCircle, AiOutlineDownload } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";
import { BsController } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOndemandVideo } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { NavigationItem } from "./item";

export const Navigation: React.FC = () => {

  const [navigationIsOpen, setNavigationIsOpen] = useRecoilState(navigationIsOpenAtom);

  const navigationItems = useMemo(() => {

    const iconProps = { className: "text-xl" };

    return {
      menu: {
        home: { address: paths.home, icon: <BiHomeSmile {...iconProps} /> },
        community: { address: paths.community, icon: <HiOutlineUserGroup {...iconProps} /> },
        games: { address: paths.games, icon: <BsController {...iconProps} /> }
      },

      categories: {
        anime: { address: paths.anime, icon: <RiMovie2Line {...iconProps} /> },
        manga: { address: paths.manga, icon: <GoBook {...iconProps} /> },
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
        <div key={subNavigationItem} className="flex flex-col space-y-8 w-full pl-8">
          <p className="text-sm text-gray-900 dark:text-gray-100 font-bold uppercase"> {subNavigationItem} </p>
          <div className="w-full h-full vstack space-y-2">
            {Object.entries(subNavigationItems).map(([name, args]) => (
              <NavigationItem key={name} name={name} {...args} />
            ))}
          </div>
        </div>
      )
    })
  }, [navigationItems]);

  return (
    <div
      id="navigation"
      className={`
        fixed sm:relative top-0 left-0 bottom-0 right-0 sm:z-[1] sm:py-5 md:py-0
        sm:opacity-100 sm:dark:bg-gray-900 sm:border-r-2 sm:dark:border-gray-800
        ${navigationIsOpen ? "z-10 opacity-100" : "-z-10 opacity-0"}
      `}
    >

      <div
        onClick={() => setNavigationIsOpen(false)}
        className={`
          overlay w-full h-full sm:hidden backdrop-blur-sm bg-blackAlpha
          transition-[opacity] ${navigationIsOpen ? "opacity-100" : "opacity-0"}
        `}
      />

      <nav
        className={`
          w-[300px] sm:w-full h-full flex flex-col space-y-8 fixed sm:relative
          top-0 sm:right-0 bg-white dark:bg-gray-900 transition-[right] duration-200
          ${navigationIsOpen ? "right-0" : "-right-[300px]"}
        `}
      >

        {NAVIGATION_CONTENT}

        <div className="hstack w-full sm:hidden -order-1 px-6">
          <div className="w-full" />
          <button
            aria-label="close-navigation-button"
            onClick={() => setNavigationIsOpen(false)}
            className="p-1 text-5xl font-medium dark:text-white"
          >&times;</button>
        </div>

      </nav>

    </div>
  );

}