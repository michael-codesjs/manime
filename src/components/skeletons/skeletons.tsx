import { Skeleton } from "@chakra-ui/react";
import React from "react";
import { ExtendedSkeletonOptions } from ".";

export function Skeletons({ count = 1, ...rest } : ExtendedSkeletonOptions) {

  const skeletons = [];
  
  for(let x = 0; x < count; x++) {
    skeletons.push(
      <Skeleton
        key={x}
        startColor={"gray.50"}
        endColor={"gray.200"}
        width={"full"}
        height={"200px"}
        borderRadius={"lg"}
        { ...rest }
      />
    )
  }

  return <> {skeletons} </>;

}