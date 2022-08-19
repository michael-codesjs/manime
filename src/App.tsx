import * as React from "react"
import {
  Box,
  ChakraProvider,
  HStack,
  Image,
  Stack,
  Text,
  theme,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import { useQuery } from "@apollo/client"
import { GET_CHARACTER, PAGE } from "./api/queries.graphql"
import Routes from "./Routes";
import Header from "./layout/header";
import "./index.css";
import Navigation from "./layout/navigation";
import SidePanel from "./layout/side-panel";


export const App = () => {

  // i know doing this is probably easier with react grid.
  // TODO: come back and refactor code after learning grid.

  return (

    <VStack
      width={"100vw"}
      height={"100vh"}
      bg={useColorModeValue("white", "gray.900")}
      spacing={0}
    >

      <Header />

      <HStack
        width={"100vw"}
        height={"100vh"}
        spacing={0}
        bg={useColorModeValue("white", "gray.900")}
      >

        <Navigation />

        <Stack
          direction={{
            base: "column",
            md: "row"
          }}
          width={"full"}
          height={"full"}
          spacing={0}
        >

          <Box
            width={"full"}
            height={"full"}
          >
            <Routes />
          </Box>

          <SidePanel />
        </Stack>

      </HStack>


    </VStack>
  )


}