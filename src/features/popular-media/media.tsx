import { AiOutlineArrowRight } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import PlayButton from "../../components/buttons/play"
import { Media, MediaType } from "../../types/api"
import { paths } from "../../utilities/constants"

type Props = {
  media: Media
}

export function Anime({ media }: Props) {

  const navigate = useNavigate();

  const title = (media.title?.english || media.title?.romaji || media.title?.native)!;
  const contentType = media.type === MediaType.Anime ? "episodes" : "chapters";
  const content = media[contentType] || 0;

  return (
    <article
      aria-label={`popular-${media.type}`}
      className={`
        group
        flex
        flex-col
        md:flex-row
        w-[220px]
        min-w-[220px]
        md:w-full
        md:max-w-full
        space-y-4
        md:space-y-0
        md:space-x-4
        p-4
        md:p-0
        border
        dark:bg-gray-800
        dark:md:bg-transparent
        dark:border-0
        md:border-0
        rounded-xl
        shadow-sm
        md:shadow-none
      `}
    >
      {/* anime cover image */}
      <div
        aria-label="anime-cover"
        style={{
          backgroundColor: media.coverImage?.color!
        }}
        className={`cursor-pointer w-full md:w-[72px] min-w-[72px] h-40 md:h-[90px] rounded-lg relative overflow-hidden`}
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
          className={`
            flex
            items-center
            justify-center
            backdrop-blur-sm
            w-full
            h-full
            transition-all
            duration-300
            opacity-0
            hover:opacity-100
          `}
        >
          <PlayButton
            onClick={
              () => {
                navigate(`${media.type?.toLowerCase()}/`+ media.id + "#play")
              }
            }
          />
        </div>
      </div>

      <div className="vstack space-y-2 w-full">
        <div className="vstack space-y-1 w-full">
          <Link
            to={media.type?.toLowerCase() + "/" + media.id}
            className={`
              block
              h-4
              w-full
              text-sm
              dark:text-gray-200
              text-gray-900
              overflow-hidden
              whitespace-nowrap
              md:whitespace-normal
              text-ellipsis
              leading-[120%]
              font-medium
              cursor-pointer
              group-hover:font-
              hover:underline
              transition-all
            `}
          > {title} </Link>
          <p
            className={`
              text-xs
              text-gray-500
              overflow-hidden
              text-ellipsis
              whitespace-normal
              h-[46px]
              min-h-[46px]
            `}
            dangerouslySetInnerHTML={{
              __html: media.description! || media.genres?.join(" ") || ""
            }}
          />
        </div>

        <div className="w-full h-7 min-h-[28px] flex justify-between items-center">

          <p
            className={`
              text-[10px]
              text-gray-900
              dark:text-gray-100
              font-medium
              group-hover:font-semibold
              cursor-pointer
            `}
            onClick={
              () => {
                navigate(paths.anime + "/" + media.id + "#episodes")
              }
            }
          > {content} {contentType} </p>

          <button
            className={`
              flex
              justify-center
              items-center
              h-full
              w-7
              rounded-full
              bg-gray-100
              dark:bg-gray-900
              md:dark:bg-gray-800
              text-blue-500
              group-hover:scale-110
              transition-all
            `}
          >

            <AiOutlineArrowRight className="text-xs" />
          </button>

        </div>

      </div>

    </article>
  )
}