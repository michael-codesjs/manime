import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { UseInfiniteQueryResult } from "react-query"
import { Page } from "../../../types/api"

type InfiniteQueryResult = UseInfiniteQueryResult<Page, any>;

type Props = {
  data: InfiniteQueryResult["data"],
}


export default function Content({ data }: Props) {

  const [selectedTrending, setSelectedTrending] = useState(data?.pages[0].media![0]!);

  console.log(selectedTrending);

  const title = (selectedTrending.title?.english || selectedTrending.title?.native || selectedTrending.title?.native)!

  return (
    <>
      <Box
        px={6}
        width={"full"}
      >
        <Box
          as={"article"}
          height={{
            base: "300px",
            md: "400px"
          }}
          width={"full"}
          position={"relative"}
          rounded={"xl"}
          backgroundColor={selectedTrending.coverImage?.extraLarge!}
        >
          <Image
            src={selectedTrending.coverImage?.extraLarge!}
            width={"full"}
            height={"full"}
            objectFit={"cover"}
            position={"absolute"}
            rounded={"inherit"}
          />

          <VStack
            width={"full"}
            height={"full"}
            align={"start"}
            justify={"center"}
            position={"absolute"}
            zIndex={2}
            p={6}
            rounded={"inherit"}
            bg={"blackAlpha.800"}
          >
            <HStack
              width={"full"}
              spacing={2}
            >
              <Image
                src={selectedTrending.coverImage?.extraLarge!}
                width={8}
                height={8}
                rounded={"full"}
                objectFit={"cover"}
              />
              <Text
                fontWeight={"black"}
                fontSize={"2xl"}
                color={"white"}
              > {title} </Text>
            </HStack>
            <Text
              color={"white"}
              fontSize={"10px"}
              height={"full"}
              maxH={"100px"}
              overflowY={"scroll"}
              dangerouslySetInnerHTML={{
                __html: selectedTrending.description!
              }}
            />
            <Text
              color={"white"}
            > {selectedTrending.episodes} episodes / {selectedTrending.season} </Text>
          </VStack>

        </Box>
      </Box>
    </>
  )
}