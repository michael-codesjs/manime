import React from "react";
import { ExtendedSkeletonOptions, Skeletons } from ".";

export function VSkeleltons({ count=1 }: ExtendedSkeletonOptions) {
  return (
    <Skeletons count={count} />
  )
}