import { useColorMode } from "@hooks/color-mode/use-color-mode";
import { useColorModeValue } from "@hooks/color-mode/use-color-mode-value";
import { HiMoon, HiSun } from "react-icons/hi";

export const ColorModeSwitcher: React.FC = () => {

  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<HiSun size={"18px"} />, <HiMoon size={"18px"} />);

  return (
    <button
      onClick={toggleColorMode}
      className={`
        w-9 h-9 flex items-center justify-center rounded-full border
        text-gray-700 dark:bg-gray-800 dark:text-white dark:border-0 hover:bg-gray-200 dark:hover:bg-gray-700
      `}
    >
      {icon}
    </button>
  );

}