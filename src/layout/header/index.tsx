import { FullLogo } from "../../components/brand";
import HamburgerButton from "../../components/buttons/hamburger";
import Search from "../search";

export default function Header() {

  return (
    <header
      id="header"
      className="border-b md:border-b-0"
    >
      <div
        id="brand"
        className="flex space-x-4 md:border-r p-6"
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
        <HamburgerButton />
      </div>

      <Search />

    </header>
  )

}