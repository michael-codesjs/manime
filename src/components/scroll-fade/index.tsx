import React from "react";
import useColorModeValue from "../../hooks/color-mode/use-color-mode-value";
import useBreakpointValue from "../../hooks/media/use-breakpoint-value";

type ScrollFadeProps = {
  height?: number | string,
  width?: number | string,
  direction?: "top" | "bottom" | "right" | "left",
  children?: React.ReactNode,
  style?: React.HTMLAttributes<HTMLDivElement>["style"],
  className?: string
}

const ScrollFade:React.FC<ScrollFadeProps> = ({ height = 10, width = "full", direction = "bottom", children, style, className }:ScrollFadeProps) => {

  height = typeof height === "number" ? (height*4)+"px" : height === "full" ? "100%" : height;
  width = typeof width === "number" ? (width*4)+"px" : width === "full" ? "100%" : width;

  const bgi = useColorModeValue(
    `linear-gradient(to ${direction}, rgba(255,255,255,8), rgba(255,255,255,0))`,
    useBreakpointValue({
      base:  `linear-gradient(to ${direction}, rgba(0,0,0,.8), rgba(0,0,0,0))`,
      sm: `linear-gradient(to ${direction}, rgb(17,24,39,.8), rgb(17,24,39,0))`
    })
  );

  return (
    <div
      style={{
        width: width,
        minWidth: width,
        height: height,
        minHeight: height,
        backgroundImage: bgi,
        ...style
      }}
      className={"absolute z-[2] "+(className)}
      children={children}
    />
  )

}

export default ScrollFade;
