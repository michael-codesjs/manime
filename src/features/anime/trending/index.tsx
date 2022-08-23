import { Box, HStack, VStack } from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";
import { getTrending } from "../../../api/queries";
import Content from "./content";
import { Skeletons } from "./skeletons";

export default function TrendingAnime() {

  const {
    isLoading,
    isError,
    data
  } = useInfiniteQuery(["trending", { page: 1, perPage: 10 }], getTrending, {
    enabled: true,
  });

  return (
    <VStack
      width={"full"}
      spacing={6}
      p={0}
    >
      { isLoading && <Skeletons /> }
      { isError && <p> error </p> }
      { data && <Content data={data} />}
      <HStack
        width={"full"}
        overflow={"scroll"}
      >
        {
          Array(12).fill(null).map(() => {
            return (
              <Box
                minW={"200px"}
                bg={"gray.300"}
                height={"200px"}
              />
            )
          })
        }
      </HStack>
    </VStack>

  )

}