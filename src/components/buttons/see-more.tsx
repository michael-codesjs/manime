import { Button, ButtonProps, Center, Flex, useColorModeValue } from "@chakra-ui/react";

export default function SeeMoreButton(props: ButtonProps) {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      width={{
        base: "200px",
        md: "full"
      }}
      minW={{
        base: "200px",
        md: "full"
      }}
      height={{
        base: "200px",
        md: "auto"
      }}
    >
      <Button
        variant={"unstyled"}
        colorScheme={"gray"}
        width={{
          base: "124px",
          md: "full"
        }}
        height={{
          base: "124px",
          md: "36px"
        }}
        rounded={"full"}
        fontSize={{
          base: "xs",
          md: "sm"
        }}
        bg={useColorModeValue("gray.50", "whiteAlpha.100")}
        color={useColorModeValue("gray.400", "gray.600")}
        _hover={{
          bg: useColorModeValue("gray.100", "whiteAlpha.300"),
          color: useColorModeValue("gray.500", "gray.400"),
          boxShadow: "sm"
        }}
        {...props}
      > See more </Button>
    </Flex>
  )
}