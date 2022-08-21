import { SkeletonOptions, SkeletonProps } from "@chakra-ui/react";
export { Skeletons } from "./skeletons";
export { VSkeleltons } from "./vskeletons";

export type ExtendedSkeletonOptions = Omit<SkeletonOptions, "startColor" | "endColor"> & SkeletonProps & { count: number };