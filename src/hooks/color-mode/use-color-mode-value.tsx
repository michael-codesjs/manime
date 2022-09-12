import { useMemo } from "react";
import useColorMode from "./use-color-mode";



export default function useColorModeValue<T = any>(lightModeValue: T, darkModeValue: T) {

  const { colorMode } = useColorMode();

  const value = useMemo(() => {
    return colorMode === "light" ? lightModeValue : darkModeValue; 
  },[colorMode]);

  return value;

}