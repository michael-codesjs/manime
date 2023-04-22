import { Search } from "./search";
import { Brand } from "./brand";
import { Extras } from "./extra";

export const Header: React.FC = () => (
  <header
    id="header"
    className={`
      border-b dark:border-gray-700 sm:dark:border-2 sm:dark:border-gray-800 dark:bg-gray-900
      md:dark:border-0 md:border-b-0
    `}
  >
    <Brand />
    <Extras />
    <Search />
  </header>
);