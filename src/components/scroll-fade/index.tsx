import { Box, BoxProps } from "@chakra-ui/react";

export default function ScrollFade(props: Omit<BoxProps, "bg" | "backgoundColor" | "backgroundImage"> & { height: BoxProps["height"], direction: "to bottom" | "to top" | "to left" | "to right" }) {
  return (
    <Box
      width={"full"}
      minH={props.height}
      position={"absolute"}
      bottom={0}
      zIndex={2}
      background={`linear-gradient(${props.direction}, rgba(255,255,255,0), rgba(255,255,255,1))`}
      { ...props }
    />
  )
}