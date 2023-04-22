import { useRecoilState } from "recoil";
import { colorModeAtom } from "../../data/atoms";

type UseColorMode = () => {
  colorMode: "light" | "dark",
  toggleColorMode: () => void
}

export const useColorMode: UseColorMode = () => {

  const [colorMode, setColorMode] = useRecoilState(colorModeAtom);
  const toggleColorMode = () => setColorMode(value => value !== "light" ? "light" : "dark");

  return {
    colorMode,
    toggleColorMode
  };

}