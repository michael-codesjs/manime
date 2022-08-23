import { HStack, Icon, Menu, MenuButton, MenuList, Stack, Text, useBreakpointValue, useColorModeValue, VStack } from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";
import Skeletons from "./skeletons";
import SeeMoreButton from "../../../components/buttons/see-more";
import ScrollFade from "../../../components/scroll-fade";
import { useInfiniteQuery } from "react-query";
import { getPopular } from "../../../api/queries";
import { Content } from "./content";

export function PopularAnime() {

  const {
    isFetching,
    // isError,
    data,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery(["popular", { page: 1, perPage: 12 }], getPopular, {
    enabled: true,
    cacheTime: Infinity,
    refetchOnMount: false,
    retryDelay: 0,
    refetchOnWindowFocus: false
  });

  return (
    <VStack
      width={"full"}
      spacing={{
        base: 4,
        md: 2
      }}
      p={0}
      align={"start"}
      justify={"start"}
    >

      <HStack
        width={"full"}
        justify={"space-between"}
        px={{
          base: 7,
          md: 0
        }}
      >
        <Text
          width={"full"}
          fontSize={"lg"}
          fontWeight={"semibold"}
          color={useColorModeValue("gray.800", "gray.200")}
        > Popular Anime </Text>
        <Menu>
          <MenuButton>
            <Icon
              as={HiDotsVertical}
              h={4}
              w={4}
            />
          </MenuButton>
          <MenuList
            p={4}
          >

          </MenuList>
        </Menu>

      </HStack>

      <Stack
        direction={{
          base: "row",
          md: "column"
        }}
        spacing={{
          base: 6,
          md: 3
        }}
        width={"full"}
        position={"relative"}
      >
        <Stack
          direction={{
            base: "row",
            md: "column"
          }}
          width={"full"}
          overflowX={{
            base: "scroll",
            md: "hidden"
          }}
          px={{
            base: 7,
            md: 0
          }}
          spacing={{
            base: 0,
            md: 3
          }}
        >
          <Stack
            height={{
              base: "auto",
              md: "220px"
            }}
            direction={{
              base: "row",
              md: "column"
            }}
            spacing={{
              base: 6,
              md: 3
            }}
            width={{
              base: "auto",
              md: "full"
            }}
            pb={{
              base: 0,
              md: 8
            }}
            p={"1px"}
            {
            ...useBreakpointValue({
              md: {
                overflowY: "scroll"
              }
            })
            }
          >
            {isFetching ? <Skeletons /> : <Content data={data} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />}
          </Stack>
          <ScrollFade
            direction={useBreakpointValue({
              base: "to left",
              md: "to bottom"
            })!}
            height={{
              base: "full",
              md: 7
            }}
            width={{
              base: 7,
              md: "full"
            }}
            left={0}
            display={{
              base: "block",
              md: "none"
            }}
          />
          <SeeMoreButton />
        </Stack>
        <ScrollFade
          direction={useBreakpointValue({
            base: "to right",
            md: "to bottom"
          })!}
          height={{
            base: "full",
            md: "36px"
          }}
          width={{
            base: "32px",
            md: "full"
          }}
          right={{
            base: "0px",
            md: ""
          }}
          bottom={{
            base: "0px",
            md: "46px"
          }}
        />
      </Stack>
    </VStack>
  )
}