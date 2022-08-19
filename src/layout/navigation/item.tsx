import { Box, Flex, HStack, Icon, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdClock, IoMdAlarm } from "react-icons/io"
import { AiOutlineClockCircle } from "react-icons/ai"

interface NavigationItemProps {
  name: string,
  address: string,
  icon: any
}

export const NAVIGATION_ICONS = [IoMdAlarm, AiOutlineClockCircle]


export default function NavigationItem({ name, address, icon }: NavigationItemProps): React.ReactElement {

  const { pathname } = useLocation();
  const isActive = pathname === address;;

  return (
    <HStack
      as={Link}
      to={address}
      spacing={5}
      width={"full"}
      color={useColorModeValue(isActive ? "red" : "gray.800", isActive ? "red" : "gray.100")}
      position={"relative"}
    >
      <Icon
        as={icon}
        width={"16px"}
        height={"16px"}
      />

      <Text
        width={"full"}
        fontSize={"xs"}
        fontWeight={isActive ? "semibold" : "normal"}
        textTransform={"capitalize"}
        color={useColorModeValue(isActive ? "red" : "gray.600", isActive ? "red" : "gray.200")}
      > {name} </Text>

      <Box
        position={"relative"}
        w={"3px"}
        h={"10px"}
      >
        <Box
          width={"4px"}
          height={isActive ? "16px" : "0px"}
          rounded={"full"}
          bg={"red"}
          position={"absolute"}
          transform={isActive ? "translate(1px,0px)" : "translate(1px, 8px)"}
          opacity={isActive ? "1": "0"}
          transition={isActive ? "all" : "none"}
          transitionDuration={"0.3s"}
          zIndex={1}
        />
      </Box>

    </HStack>
  )
}