import { Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Skeletons as CustomSkeletons } from "../../components/skeletons";

export default function Skeletons() {
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
        minW={"180px"}
        spacing={4}
      >
        <CustomSkeletons
          count={1}
          width={{
            base: "full",
            md: "80px",
          }}
          minW={"80px"}
          height={{
            base: "200px",
            md: "90px"
          }}
          borderRadius={"xl"}
        />
        <VStack
          width={"full"}
          height={"full"}
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