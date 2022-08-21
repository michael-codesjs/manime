import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

export default function ScrollFade(props: Omit<BoxProps, "bg" | "backgoundColor" | "backgroundImage"> & { height: BoxProps["height"], direction: "to bottom" | "to top" | "to left" | "to right" }) {
  return (
    <Box
      width={"full"}
      minH={props.height}
      position={"absolute"}
      bottom={0}
      zIndex={2}
      background={
        useColorModeValue(
          `linear-gradient(${props.direction}, rgba(255,255,255,0), rgba(255,255,255,1))`,
          `linear-gradient(${props.direction}, rgba(23, 25, 35,0), rgba(23, 25, 35,1))`
        )
      }
      { ...props }
    />
  )
}