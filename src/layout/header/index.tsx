import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Heading, HStack, IconButton, Image, Spacer, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import ColorModeSwitcher from "../../components/buttons/color-mode-switcher";
import { navigationIsOpenAtom } from "../../data/atoms";
import Search from "../search";



export default function Header() {

  const setNavigationIsOpen = useSetRecoilState(navigationIsOpenAtom);

  return (
    <Grid
      as={"header"}
      gridArea={"header"}
      templateAreas={{
        base: `
          "brand extras"
          "search search"
        `,
        sm: `
          "brand extras search"
        `
      }}
      gridTemplateColumns={{
        base: "repeat(2,1fr)",
        sm: "1fr 1fr 2fr",
        md: "200px auto 320px"
      }}

      borderBottomWidth={{
        base: "1px",
        md: "0px"
      }}
    >

      <HStack
        gridArea={"brand"}
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

      <HStack
        gridArea={"extras"}
        spacing={4}
        p={6}
      >
        <Box
          id={"header-content-portal-container"}
          width={"full"}
          height={"full"}
          // use this via a portal for all your extra content like tabs.
          // on bigger screens that is.
        />
        <ColorModeSwitcher />
        <IconButton
          aria-label="menu-button"
          icon={<HamburgerIcon />}
          size={"sm"}
          onClick={() => setNavigationIsOpen(isOpen => !isOpen)}
          display={{
            base: "block",
            sm: "none"
          }}
        />
      </HStack>

      <Search />

    </Grid>
  )

}