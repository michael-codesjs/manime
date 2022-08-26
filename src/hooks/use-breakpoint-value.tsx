import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { breakpoints } from "../utilities/constants";

type Breakpoints = {
  base?: any,
  sm?: any,
  md?: any,
  lg?: any,
}

type Other = {
  depends?: any[] // dependencies that'll cause a rework
}

export default function useBreakpointValue(args: Breakpoints, other?:Other) {

  const { depends = [] } = other || {};

  const breakpointEntries = useMemo(() => Object.entries(breakpoints),[]);
  
  const getValue = () => {

    let value = args.base;

    for(let x=0; x<breakpointEntries.length; x++) {
      const [breakpointName, breakpointWidth] = breakpointEntries[x];
      const breakpointValue = (args as any)[breakpointName];
      if((window.innerWidth > breakpointWidth) && breakpointValue) {
        value = breakpointValue;
        console.log(breakpointName, breakpointValue);
        break;
      }
    }
    
    return value;

  }

  const [value,setValue] = useState<ReturnType<typeof getValue>>();

  const handler = () => {
    setValue(getValue());
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  },[]);

  useEffect(() => {
    handler();
  },depends);

  return value;

}