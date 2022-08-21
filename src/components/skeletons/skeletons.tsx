import { Skeleton, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ExtendedSkeletonOptions } from ".";

export function Skeletons({ count = 1, ...rest } : ExtendedSkeletonOptions) {
  
  const startColor = useColorModeValue("gray.50","gray.600");
  const endColor = useColorModeValue("gray.200","gray.800")

  const skeletons = [];
  
  for(let x = 0; x < count; x++) {
    skeletons.push(
      <Skeleton
        key={x}
        startColor={startColor}
        endColor={endColor}
        width={"full"}
        height={"200px"}
        borderRadius={"lg"}
        { ...rest }
      />
    )
  }

  return <> {skeletons} </>;

}