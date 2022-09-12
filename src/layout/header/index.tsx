import { FullLogo } from "../../components/brand";
import ColorModeSwitcher from "../../components/buttons/color-mode-switcher";
import HamburgerButton from "../../components/buttons/hamburger";
import Search from "../search";

export default function Header() {

  return (
    <header
      id="header"
      className="border-b dark:bg-gray-800 md:border-b-0"
    >
      <div
        id="brand"
        className="flex space-x-4 md:border-r dark:md:border-gray-700 p-6"
      >
        <FullLogo />
      </div>

      <div
        id="extras"
        className="flex space-x-4 p-6"
      >
        <div
          id="header-portal-container"
          className="w-full h-full"
        // on larger screens use this via a portal for all your extra content like tabs.
        />
        <div className="flex space-x-4">
          <ColorModeSwitcher />
          <HamburgerButton />
        </div>
      </div>

      <Search />

    </header>
  )

}