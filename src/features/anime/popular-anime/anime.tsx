import { Box, Center, Image, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import PlayButton from "../../../components/buttons/play"
import { Media } from "../../../types/api"
import { paths } from "../../../utilities/constants"

type Props = {
  media: Media
}

export function Anime({ media }: Props) {

  const navigate = useNavigate();

  const title = (media.title?.english || media.title?.romaji || media.title?.native)!;

  return (
    <Stack
      aria-label="popular-anime"
      direction={{
        base: "column",
        md: "row"
      }}
      width="full"
      minW="220px"
      spacing={{
        base: 4,
        md: 4
      }}
      p={{
        base: 4,
        md: 0
      }}
      borderWidth={{
        base: "1px",
        md: "0px"
      }}
      borderColor="gray.50"
      boxShadow={{
        base: "xs",
        md: "none"
      }}
      borderRadius="8px"
    >

      {/* anime cover image */}
      <Box
        aria-label="anime-cover"
        backgroundColor={media.coverImage?.color!}
        cursor="pointer"
        width={{
          base: "full",
          md: "80px",
        }}
        minW={"80px"}
        height={{
          base: "150px",
          md: "90px"
        }}
        position="relative"
        overflow={"clip"}
        borderRadius={"lg"}
      >
        <Image
          src={media.coverImage?.large!}
          alt={title + " cover"}
          position={"absolute"}
          width={"full"}
          height={"full"}
          objectFit="cover"
        />
        <Center
          backgroundColor="blackAlpha.400"
          backdropFilter="blur(3px)"
          width="full"
          height="full"
          rounded="inherit"
          transition="all"
          transitionDuration="0.3s"
          opacity={0}
          _hover={{
            opacity: 1,
            backgroundSize: "120%"
          }}
        >
          <PlayButton
            onClick={
              () => {
                navigate(paths.anime+"/"+media.id+"#play")
              }
            }
          />
        </Center>
      </Box>

      <VStack
        width="full"
        align="start"
        spacing={2}
      >
        <Box>
          <Text
            as={Link}
            to={paths.anime+"/"+media.id}
            fontSize={{
              base: "13px",
              // md: "14px"
            }}
            
            fontWeight="medium"
          > {title} </Text>
          <Text
            fontSize="xs"
            
            maxH="32px"
            whiteSpace="normal"
            overflow="hidden"
            textOverflow="ellipsis"
            dangerouslySetInnerHTML={{
              __html: media.description! || media.genres!.join(" ")
            }}
          />
        </Box>

        <Text
          fontSize="10px"
          
          fontWeight="medium"
          cursor="pointer"
          onClick={
            () => {
              navigate(paths.anime+"/"+media.id+"#episodes")
            }
          }
        >
          {media.episodes || 0} episode{media.episodes! == 1 ? "": "s"}
        </Text>

      </VStack>

    </Stack>
  )
}