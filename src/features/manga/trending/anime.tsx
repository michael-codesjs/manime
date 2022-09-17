import { Link, useNavigate } from "react-router-dom"
import AnimeCover from "../../../components/anime/cover"
import { Media, MediaStatus } from "../../../types/api"
import { paths } from "../../../utilities/constants"
import { getTitle } from "../../../utilities/functions"

type Props = {
  media: Media
}


export default function Anime({ media }: Props) {

  const navigate = useNavigate();

  const title = getTitle(media.title);
  const statusColor = media.status === MediaStatus.Releasing ? "green-500" : media.status === MediaStatus.Finished ? "blue-600" : media.status === MediaStatus.Cancelled ? "red-600" : media.status === MediaStatus.NotYetReleased ? "purple-600" : "gray-600";

  return (
    <div className="group flex flex-col space-y-4 rounded-lg">
      <AnimeCover media={media}>
        <p className="h-0 bg-green-500 bg-blue-600 bg-gray-600 lg:bg-red-600 bg-purple-600" /> {/* so tailwind can include these colors */}
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
              bg-${statusColor}
              text-gray-100
              cursor-pointer
            `}
          >
            {media.status!.replace(/_/g, " ")}
          </p>
        </div>
      </AnimeCover>
      <div className="vstack space-y-2">
        <Link
          to={paths.anime + "/" + media.id}
          className={`
            w-full
            text-[14px]
            block
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