import { HiMoon, HiSun } from "react-icons/hi";
import useColorMode from "../../hooks/color-mode/use-color-mode";
import useColorModeValue from "../../hooks/color-mode/use-color-mode-value";



export default function ColorModeSwitcher() {

  const {
    toggleColorMode
  } = useColorMode();

  const iconSize = "18px"
  const icon = useColorModeValue(
    <HiSun size={iconSize} />,
    <HiMoon size={iconSize} />
  );

  return (
    <button
      className="w-9 h-9 flex items-center justify-center rounded-full border dark:bg-gray-900 dark:text-white dark:border-0 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={toggleColorMode}
    >
      { icon }
    </button>
  )

}