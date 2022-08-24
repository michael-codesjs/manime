import { Box, Grid, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import HamburgerButton from "../../components/buttons/hamburger";
import Search from "../search";

export default function Header() {

  return (
    <Grid
      as="header"
      gridArea="header"
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
        base: "1fr 1fr",
        sm: "1fr 1fr 2fr",
        md: "230px auto 320px"
      }}
      borderBottomWidth={"1px"}
    >

      <HStack
        gridArea="brand"
        borderRightWidth={{
          base: "0px",
          md: "1px"
        }}
        p={6}
      >
        <Image
          src="/anime-logo.jpg"
          alt="logo"
          width="30px"
          minW="30px"
          height="30px"
          rounded="full"
          objectFit="cover"
        />
        <Text
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing="1.2px"
        > anime </Text>
      </HStack>

      <HStack
        gridArea="extras"
        spacing={4}
        p={6}
      >
        <Box
          id="header-portal-container"
          width="full"
          height="full"
          // on larger screens use this via a portal for all your extra content like tabs.
        />
        <HamburgerButton />
      </HStack>

      <Search />

    </Grid>
  )

}