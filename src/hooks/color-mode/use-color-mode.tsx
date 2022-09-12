import { useRecoilState } from "recoil";
import { colorModeAtom } from "../../data/atoms";



export default function useColorMode() {

  const [colorMode, setColorMode] = useRecoilState(colorModeAtom);

  const toggleColorMode = () => {
    setColorMode(value => value === "light" ? "dark" : "light");
  }

  return {
    colorMode,
    toggleColorMode
  }

}