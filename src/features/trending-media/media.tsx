import { Link } from "react-router-dom"
import AnimeCover from "../../components/media/cover"
import { Media as TMedia, MediaStatus } from "../../types/api"
import { getTitle } from "../../utilities/functions"

type Props = {
  media: TMedia
}

export default function Media({ media }: Props) {

  const title = getTitle(media.title);

  return (
    <div className="group flex flex-col space-y-4 rounded-lg">
      <AnimeCover media={media}>
        <div className="w-full flex py-3 px-3">
          <p
            className={`
              w-auto
              px-2
              py-[3px]
              text-[9px]
              capitalize
              font-medium
              shadow-lg
              rounded-lg
              ${
                media.status === MediaStatus.Releasing ? "bg-green-500" :
                media.status === MediaStatus.Finished ? "bg-blue-600" :
                media.status === MediaStatus.Cancelled ? "bg-red-600" :
                media.status === MediaStatus.NotYetReleased ? "bg-purple-600" :
                "bg-gray-600"
              }
              text-gray-100
              absolute
              z-[2]
              cursor-pointer
            `}
          >
            {media.status}
          </p>
        </div>
      </AnimeCover>
      <div className="vstack space-y-2">
        <Link
          to={media.type?.toLowerCase()+"/"+media.id}
          className={`
            w-full
            text-[14px]
            dark:text-gray-200
            text-gray-900
            text-ellipsis
            leading-[120%]
            font-medium
            cursor-pointer
            group-hover:font-semibold
            hover:underline
            transition-all
          `}
          
        > {title} </Link>
      </div>
    </div>
  )

}