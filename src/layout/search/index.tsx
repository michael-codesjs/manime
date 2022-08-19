import { RiSearch2Line } from "react-icons/ri";
import { Box, Icon, Button, IconButton, Input, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, Menu, MenuButton, useColorModeValue, MenuList, Text, VStack, Divider } from "@chakra-ui/react";
import { GoSettings } from "react-icons/go";

export default function Search() {

  return (
    <Box
      width={{
        base: "full",
        md: "300px"
      }}
      minW={{
        base: "full",
        md: "300px"
      }}
      height={"full"}
      py={{
        base: 0,
        md: 6
      }}
      px={6}
      borderLeftWidth={{
        base: "0px",
        md: "1px"
      }}
    >
      <InputGroup
        width={"full"}
        height={"38px"}
        alignItems={"center"}
      >
        <InputLeftElement>
          <Icon
            as={RiSearch2Line}
            color={useColorModeValue("gray.600", "gray.200")}
            width={"14px"}
            height={"14px"}
          />
        </InputLeftElement>
        <Input
          type={"search"}
          width={"full"}
          height={"40px"}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={"14px"}
          _focus={{
            border: "none",
            outline: "0"
          }}
          rounded={"full"}
          bg={useColorModeValue("gray.50", "gray.700")}
          placeholder={"search"}
          _placeholder={{
            color: useColorModeValue("gray.400", "gray.200")
          }}
        />
        <InputRightElement>
          <Menu>
            <MenuButton
              as={Button}
              variant={"unstyled"}
            >
              <Icon
                as={GoSettings}
                width={"14px"}
                height={"14px"}
              />
            </MenuButton>
            <MenuList
              as={VStack}
              align={"start"}
              justify={"start"}
              spacing={2}
              p={3}
            >
              <Text
                fontWeight={"semibold"}
                fontSize={"xs"}
                color={useColorModeValue("gray.600","gray.300")}
              > Search Filters </Text>
              <Divider />
            </MenuList>
          </Menu>
        </InputRightElement>
      </InputGroup>
    </Box>
  )

}