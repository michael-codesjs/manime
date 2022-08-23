import { Box, Center, Image, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react"
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
      as={"article"}
      aria-label={"popular-anime"}
      direction={{
        base: "column",
        md: "row"
      }}
      width={"full"}
      minW={"220px"}
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
      borderColor={useColorModeValue("gray.50","gray.900")}
      boxShadow={{
        base: "xs",
        md: "none"
      }}
      bg={{
        base: useColorModeValue("none","gray.700"),
        md: "none"
      }}
      borderRadius={"8px"}
    >

      <p> { media.title?.english || "Anime Title" } </p>
    </Stack>
  )
}