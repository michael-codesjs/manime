import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, IconButton, Image, Spacer, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import ColorModeSwitcher from "../../components/buttons/color-mode-switcher";
import { navigationIsOpenAtom } from "../../data/atoms";
import Search from "../search";



export default function Header() {

  const setNavigationIsOpen = useSetRecoilState(navigationIsOpenAtom);

  return (
    <Stack
      direction={{
        base: "column",
        md: "row"
      }}
      as={"header"}
      width={"full"}
      align={"center"}
      justify={"center"}
      spacing={{
        base: 0,
        md: 6
      }}
    // borderBottomWidth={"1px"}
    >

      <HStack
        width={"full"}
        align={"center"}
        spacing={3}
      >
        <HStack
          width={"220px"}
          borderRightWidth={{
            base: "0px",
            md: "1px"
          }}
          p={6}
        >
          <Image
            src={"/anime-logo.jpg"}
            width={{
              base: "30px",
            }}
            height={{
              base: "30px",
            }}
            borderRadius={"full"}
            objectFit={"cover"}
          />
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            letterSpacing={"1.2px"}
            color={useColorModeValue("gray.800", "gray.50")}
          > anime </Text>
        </HStack>
        <Spacer />
        <HStack
          spacing={6}
          p={6}
        >
          <ColorModeSwitcher />
          <IconButton
            aria-label="menu-button"
            icon={<HamburgerIcon />}
            size={"sm"}
            onClick={() => setNavigationIsOpen(isOpen => !isOpen)}
            display={{
              base: "block",
              md: "none"
            }}
          />
        </HStack>
      </HStack>

      <Search />


    </Stack>
  )

}