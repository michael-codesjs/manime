import { useNavigate } from "react-router-dom"
import PlayButton from "@components/buttons/play"
import { Media } from "@typings/api"
import { paths } from "@utilities/constants"

type Props = {
  media: Media,
  className: string
};

export function Anime({ media, className }: Props) {

  const navigate = useNavigate();

  const title = (media.title?.english || media.title?.romaji || media.title?.native)!;

  return (
    <article
      aria-label="anime-intro-grid-item"
      className={"group vstack " + className}
    >
      <div
        aria-label="anime-cover"
        style={{
          backgroundColor: media.coverImage?.color!
        }}
        className={`cursor-pointer w-full h-full relative overflow-hidden`}
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

    </article>
  )
}