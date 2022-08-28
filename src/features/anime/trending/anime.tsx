import { AiOutlineArrowRight } from "react-icons/ai"
import { useInView } from "react-intersection-observer"
import { useNavigate } from "react-router-dom"
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
      className="group vstack space-y-4 sm:border sm:p-4 box-border rounded-lg"
    >

      {/* anime cover image */}
      <div
        aria-label="anime-cover"
        style={{
          backgroundColor: media.coverImage?.color!
        }}
        className={`cursor-pointer w-full h-40 rounded-lg relative overflow-hidden`}
      >
        <img
          src={media.coverImage?.extraLarge!}
          alt={title + " cover"}
          className="absolute w-full h-full rounded-lg object-cover group-hover:scale-125 duration-200"
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
                navigate(paths.anime + "/" + media.id + "#play")
              }
            }
          />
        </div>
      </div>

      <div className="vstack space-y-2 w-full">
        <p
          className={"text-[18px] h-5 w-full text-center overflow-hidden whitespace-nowrap md:whitespace-normal text-ellipsis leading-[120%] font-medium cursor-pointer group-hover:font-semibold transition-all"}
          onClick={
            () => {
              navigate(paths.anime + "/" + media.id)
            }
          }
        > {title} </p>

      </div>

    </article>
  )
}