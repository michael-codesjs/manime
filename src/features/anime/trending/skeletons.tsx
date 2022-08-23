import { Box, HStack, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Skeletons as CustomSkeletons } from "../../../components/skeletons";


export function Skeletons() {

  const containerBorderColor = useColorModeValue("gray.50", "gray.900");
  const containerBgColor = useColorModeValue("none", "gray.700");

  const numberOfSkeletons = 10;
  const skeletons = [];

  for (let x = 0; x < numberOfSkeletons; x++) {
    skeletons.push(
      <VStack
        key={x}
        spacing={4}
        width={"200px"}
        minW={"200px"}
        height={"200px"}
        align={"center"}
        rounded={"lg"}
        p={4}
        borderWidth={"1px"}
        borderColor={containerBorderColor}
        boxShadow={{
          base: "xs",
          md: "none"
        }}
        bg={containerBgColor}
        borderRadius={"8px"}
      >
        <CustomSkeletons
          count={1}
          height={"200px"}
          width={"full"}
        />
        <CustomSkeletons
          count={2}
          height={"16px"}
          width={"80%"}
        />
      </VStack>
    )
  }

  return (
    <VStack
      px={6}
      width={"full"}
      spacing={6}
    >
      <CustomSkeletons
        count={1}
        height={{
          base: "300px",
          md: "400px"
        }}
        rounded={"xl"}
      />
      <HStack
        width={"full"}
        overflowX={"scroll"}
        spacing={6}
      > {skeletons} </HStack>
    </VStack>
  )

}