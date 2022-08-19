import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  HStack,
  IconButton, Text, useColorMode,
  useColorModeValue
} from '@chakra-ui/react';

export default function ColorModeSwitcher() {

  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(<SunIcon />, <MoonIcon />);

  return (
    <IconButton
      cursor={"pointer"}
      aria-label={"color-mode-switcher"}
      icon={SwitchIcon}
      size={"sm"}
      borderRadius={"full"}
      bg={useColorModeValue("white", "gray.700")}
      color={useColorModeValue("gray.800", "gray.100")}
      borderWidth={useColorModeValue("1px","0px")}
      onClick={toggleColorMode}
    />
  )

}