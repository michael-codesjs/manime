import { VStack } from "@chakra-ui/react";



export default function SidePanel() {


  return (
    <VStack
      minW={"300px"}
      width={"300px"}
      height={"full"}
      py={6}
      justify={"start"}
      spacing={8}
      borderLeftWidth={{
        base: "0px",
        md: "1px"
      }}
    >
      <p> Hello </p>
    </VStack>
  )

}