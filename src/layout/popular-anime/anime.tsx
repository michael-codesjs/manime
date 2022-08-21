import { Box, Center, Image, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import React from "react"
import PlayButton from "../../components/buttons/play"
import { Media } from "../../types/api"

type Props = {
  media: Media
}

export function Anime({ media }: Props) {

  const title = (media.title?.english || media.title?.romaji || media.title?.native)!;

  console.log(media)

  return (
    <Stack
      as={"article"}
      aria-label={"popular-anime"}
      direction={{
        base: "column",
        md: "row"
      }}
      width={"full"}
      minW={"180px"}
      spacing={4}
      borderWidth={{
        base: "1px",
        md: "0px"
      }}
      boxShadow={{
        base: "xs",
        md: "none"
      }}
      borderRadius={"lg"}
    >

      {/* anime cover image */}
      <Box
        aria-label={"anime-cover"}
        backgroundColor={media.coverImage?.color!}
        width={{
          base: "full",
          md: "80px",
        }}
        minW={"80px"}
        height={{
          base: "120px",
          md: "90px"
        }}
        position={"relative"}
        overflow={"clip"}
        borderRadius={"inherit"}
      >
        <Image
          src={media.coverImage?.medium!}
          alt={title + " cover"}
          position={"absolute"}
          width={"full"}
          height={"full"}
          objectFit={"cover"}
        />
        <Center
          backgroundColor={"blackAlpha.400"}
          backdropFilter={"blur(3px)"}
          width={"full"}
          height={"full"}
          rounded={"inherit"}
          transition={"all"}
          transitionDuration={"0.3s"}
          opacity={0}
          _hover={{
            opacity: 1,
            backgroundSize: "120%"
          }}
        >
          <PlayButton />
        </Center>
      </Box>

      <VStack
        width={"full"}
        align={"start"}
        spacing={2}
        p={{
          base: 4,
          md: 0
        }}
      >
        <Box>
          <Text
            fontSize={{
              base: "13px",
              // md: "14px"
            }}
            color={useColorModeValue("gray.900", "gray.100")}
            fontWeight={"medium"}
          > {title} </Text>
          <Text
            fontSize={"xs"}
            color={useColorModeValue("gray.500", "gray.500")}
            maxH={"32px"}
            whiteSpace={"normal"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            dangerouslySetInnerHTML={{
              __html: media.description! || media.genres!.join(" ")
            }}
          />
        </Box>

        <Text
          fontSize={"10px"}
          color={useColorModeValue("gray.600", "gray.300")}
          fontWeight={"medium"}
        >
          {media.episodes || 0} episode{media.episodes! == 1 ? "": "s"}
        </Text>

      </VStack>

    </Stack>
  )
}