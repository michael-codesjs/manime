import { HStack, VStack } from "@chakra-ui/react";
import { Skeletons as CustomSkeletons } from "../../../components/skeletons";


export function Skeletons() {

  const numberOfSkeletons = 10;
  const skeletons = [];

  for (let x = 0; x < numberOfSkeletons; x++) {
    skeletons.push(
      <p> loading </p>
    )
  }

  return <p> { skeletons } </p>

}