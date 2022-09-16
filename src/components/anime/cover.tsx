import { useNavigate } from "react-router-dom";
import { Media } from "../../types/api"
import { paths } from "../../utilities/constants";
import { getTitle } from "../../utilities/functions"
import PlayButton from "../buttons/play";


type Props = {
  media: Media,
  children?: React.ReactNode
}

export default function AnimeCover({ media, children }: Props) {

  const navigate = useNavigate();
  const title = getTitle(media.title);

  return (
    <div
      aria-label="anime-cover"
      style={{
        backgroundColor: media.coverImage?.color!
      }
      }
      className={`cursor-pointer w-full h-48 rounded-lg relative overflow-hidden`}
    >
      <img
        src={media.coverImage?.extraLarge!}
        alt={media.title?.english + " cover"}
        className="absolute w-full h-full rounded-lg object-cover group-hover:scale-125 duration-200"
      />

      <div className="absolute w-full h-full rounded-lg" children={children} />
      
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
              navigate(paths.anime + "/" + media.id + "#play")
            }
          }
        />
      </div>
    </div>

  )
}