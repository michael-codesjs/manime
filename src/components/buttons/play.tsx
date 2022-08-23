import { Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import { HiPlay } from "react-icons/hi";



export default function PlayButton(props:Omit<IconButtonProps, "icon" | "aria-label">) {
  return (
    <IconButton
      variant={"unstyled"}
      aria-label="anime-play-button"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      rounded={"full"}
      backgroundColor={"gray.700"}
      color={"red.600"}
      icon={<Icon as={HiPlay} height={4} width={4} />}
      size={"sm"}
      transition={"all"}
      transitionDuration={"0.3s"}
      _hover={{
        transform: "scale(1.2)"
      }}
      {...props}
    />
  )
}