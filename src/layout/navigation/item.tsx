import { navigationIsOpenAtom } from "@data/atoms";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";

type NavigationItemProps = {
  name: string,
  address: string,
  icon: ReactElement
};

export const NavigationItem: React.FC<NavigationItemProps> = (props) => {

  const setNavigationIsOpen = useSetRecoilState(navigationIsOpenAtom);

  const { name, address, icon } = props;
  const { pathname } = useLocation();
  const isActive = pathname === address;

  /** on mobile devices, you'll want to close the navigation when a link is clicked */
  const postLinkClick = () => setNavigationIsOpen(false);

  return (
    <Link
      to={address}
      onClick={postLinkClick}
      className={"hstack space-x-4 w-full items-center justify-center relative"}
    >
      <p className={isActive ? "text-red-500 dark:text-red-500" : "text-gray-600 dark:text-gray-100"}> {icon} </p>
      <p className={"w-full text-[14px] capitalize text-inherit " + (isActive ? "font-semibold text-red-500 dark:text-red-500" : "font-normal dark:text-gray-100")}>{name}</p>
      <div className="relative">
        <div className={"w-1 rounded-full bg-red-500 z-10 absolute -translate-x-[1px] " + (isActive ? "transition-all duration-200 h-4 translate-y-0" : "h-0 translate-y-2")} />
      </div>
    </Link>
  );

}