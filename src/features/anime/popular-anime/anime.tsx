import { Box, Center, Image, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { useInView } from "react-intersection-observer"
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

  const { ref } = useInView();

  return (
    <article
      aria-label="popular-anime"
      className="group flex flex-col md:flex-row w-full min-w-[220px] space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0 border md:border-0 rounded-xl shadow-sm md:shadow-none"
    > 

      {/* anime cover image */}
      <div
        aria-label="anime-cover"
        style={{
          backgroundColor: media.coverImage?.color!
        }}
        className={`cursor-pointer w-full md:w-20 min-w-[80px] h-40 md:h-[90px] rounded-lg relative overflow-hidden`}
      >
        <img
          src={media.coverImage?.large!}
          alt={title + " cover"}
          className="absolute w-full h-full rounded-lg object-cover group-hover:scale-110 duration-200"
        />
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.3)"
          }}
          className="flex items-center justify-center backdrop-blur-sm w-full h-full transition-all duration-300 opacity-0 hover:opacity-100"
        >
          <PlayButton
            onClick={
              () => {
                navigate(paths.anime+"/"+media.id+"#play")
              }
            }
          />
        </div>
      </div>

      <div className="vstack space-y-2">
        <div className="vstack space-y-1">
          <p
            className={"text-[14px] leading-[120%] font-medium cursor-pointer group-hover:font-semibold transition-all"}
            onClick={
              () => {
                navigate(paths.anime+"/"+media.id)
              }
            }
          > {title} </p>
          <p
            className="text-xs text-gray-500 overflow-hidden text-ellipsis whitespace-normal max-h-8"
            dangerouslySetInnerHTML={{
              __html: media.description! || media.genres!.join(" ")
            }}
          />
        </div>

        <p
          className="text-[10px] font-medium group-hover:font-semibold cursor-pointer"
          onClick={
            () => {
              navigate(paths.anime+"/"+media.id+"#episodes")
            }
          }
        >
          {media.episodes || 0} episode{media.episodes! == 1 ? "": "s"}
        </p>

      </div>

    </article>
  )
}