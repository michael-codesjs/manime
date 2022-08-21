import { Stack, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { Skeletons as CustomSkeletons } from "../../components/skeletons";

export default function Skeletons() {

  const containerBorderColor = useColorModeValue("gray.50","gray.900");
  const containerBgColor = useColorModeValue("none","gray.700");

  const skeletons = [];
  const numberOfSkeletons = 6;
  
  for (let x = 0; x < numberOfSkeletons; x++) {
    skeletons.push(
      <Stack
        key={x}
        direction={{
          base: "column",
          md: "row"
        }}
        width={"full"}
        minW={"220px"}
        spacing={4}
        p={{
          base: 4,
          md: 0
        }}
        borderWidth={{
          base: "1px",
          md: "0px"
        }}
        borderColor={containerBorderColor}
        boxShadow={{
          base: "xs",
          md: "none"
        }}
        bg={{
          base: containerBgColor,
          md: "none"
        }}
        borderRadius={"8px"}
      >
        <CustomSkeletons
          count={1}
          width={{
            base: "full",
            md: "80px",
          }}
          minW={"80px"}
          height={{
            base: "150px",
            md: "90px"
          }}
          borderRadius={"xl"}
        />
        <VStack
          width={"full"}
          height={"auto"}
          align={"start"}
          spacing={2}
        >
          <CustomSkeletons
            count={1}
            height={"28px"}
            borderRadius={"md"}
          />
          <VStack
            width={"full"}
            spacing={2}
            align={"start"}
          >
            <CustomSkeletons
              count={1}
              height={"14px"}
              borderRadius={"md"}
            />
            <CustomSkeletons
              count={1}
              height={"8px"}
              width={"66%"}
              borderRadius={"md"}
            />
          </VStack>
          <CustomSkeletons
            count={1}
            height={"18px"}
            width={"50px"}
            rounded={"full"}
            borderRadius={"sm"}
          />
        </VStack>
      </Stack>
    )
  }
  return <> {skeletons} </>
}