import { Breakpoints } from "../types";
import { breakpointKeys, breakpoints } from "./constants";

export function unStringfy<T>(jsonString: string): T | string {
  try {
    const object = JSON.parse(jsonString) as T;
    return object;
  } catch(error) {
    return jsonString;
  }
}

export const withinRange = (number: number, range: [number, number]) => number >= range[0] && number <= range[1];

export const sortedEntries = <T = any>(obj: { [k: string]: T }): Array<[string, T]> => {
  /* Object.entries but the entries are sorted in the order in which they were inserted */
  return Object.keys(obj)
    .map(key => [key, obj[key]]);
}

export const intersection = <T = any>(array1: Array<T>, array2: Array<T>) => array1.filter(key => array2.includes(key));

export const getNearestBreakPointValue = <T = any>(values: Partial<Record<Breakpoints, T>>, breakpoint: Breakpoints) => {
  /* Returns the nearest breakpoint value below a certain breakpoint if that breakpoints value is undefined */
  const breakpoints = Object.keys(values);
  let index = breakpoints.indexOf(breakpoint);
  if (index !== -1) return values[breakpoint];
  index = breakpointKeys.indexOf(breakpoint);
  while (index >= 0) {
    const key = breakpointKeys[index];
    if (key in values) break;
    index -= 1;
  }
  return values[breakpointKeys[index] as Breakpoints];
}

export const getCurrentSeason = () => {

  const now = new Date();
  const month = now.getMonth() + 1;  // plus one because January is index 0

  return (
    month > 3 && month < 6 ? 'SPRING' :
    month > 6 && month < 9 ? 'SUMMER' :
    month > 9 && month < 12 ? 'FALL' :
    'WINTER' // default
  );
}
