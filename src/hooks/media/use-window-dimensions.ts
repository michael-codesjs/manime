import { useEffect, useRef, useState } from "react";

export default function useWindowDimensions() {
  
  const getDimensions = () => ({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [dimensions, setDimensions] = useState(getDimensions());

  const handler = () => setDimensions(getDimensions());

  useEffect(() => {
    window.addEventListener("resize",handler);
    return () => window.removeEventListener("resize",handler);
  },[]);

  return dimensions;

}