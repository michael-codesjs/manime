import React from "react";

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

  return (
    <div
      style={{
        width: width,
        minWidth: width,
        height: height,
        minHeight: height,
        backgroundImage: `linear-gradient(to ${direction}, rgba(255,255,255,8), rgba(255,255,255,0))`,
        ...style
      }}
      className={"absolute z-[2] from-cyan-200  to-cyan-900 "+(className)}
      children={children}
    />
  )

}

export default ScrollFade;
