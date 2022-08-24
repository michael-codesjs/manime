import { Box, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

export default function Search() {

  return (
    <Box
      gridArea="search"
      pb={{
        base: 6,
        sm: 0
      }}
      pt={{
        sm: 6
      }}
      px={6}
      borderLeftWidth={{
        base: "0px",
        md: "1px"
      }}
    >
      <InputGroup
        width="full"
        height="38px"
        alignItems="center"
      >
        <InputLeftElement>
          <Icon
            as={RiSearch2Line}
            color={"gray.600"}
            width="14px"
            height="14px"
          />
        </InputLeftElement>
        <Input
          type="search"
          width="full"
          height="40px"
          alignItems="center"
          justifyContent="center"
          fontSize="14px"
          _focus={{
            border: "none",
            outline: "0"
          }}
          rounded="full"
          borderWidth={"1px"}
          backgroundColor={"gray.50"}
          placeholder="search"
          _placeholder={{
            color: "gray.600"
          }}
        />
      </InputGroup>
    </Box>
  )

}