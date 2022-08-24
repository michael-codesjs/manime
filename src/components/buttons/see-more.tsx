import { Button, ButtonProps, Flex } from "@chakra-ui/react";

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
        bg="gray.50"
        color={"gray.400"}
        _hover={{
          bg: "gray.100",
          color: "gray.500",
          boxShadow: "sm"
        }}
        {...props}
      > See more </Button>
    </Flex>
  )
}