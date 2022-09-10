import { useMemo, useState } from "react";
import { HiStar } from "react-icons/hi";
import { UseQueryResult } from "react-query";
import PlayButton from "../../../components/buttons/play";
import ScrollFade from "../../../components/scroll-fade";
import { Page } from "../../../types/api";

type QueryResult = UseQueryResult<Page, any>;

type Props = {
  data: QueryResult["data"]
}
export default function Content(props: Props) {

  const data = props.data!;

  const [selectedAnimeIndex, setSelectedAnimeIndex] = useState(0);
  const selectedAnime = useMemo(() => data.media![selectedAnimeIndex],[selectedAnimeIndex]);

  const title = selectedAnime?.title?.english || selectedAnime?.title?.romaji;

  return (
    <>
      <div
        className="w-full h-60 sm:h-60 md:h-[340px] rounded-2xl relative flex space-y-1 flex-col items-center justify-center p-6 md:p-8 lg:p-12 bg-no-repeat bg-cover"
        style={{
          backgroundColor: selectedAnime?.coverImage?.color!,
          backgroundImage: `
          linear-gradient(to top right, rgba(0,0,0,0.8) 30%,rgba(0,0,0,0.2)),
          url(${selectedAnime?.coverImage?.extraLarge})
          `,
        }}
      >
        <div className="flex md:scale-[1.6] md:-translate-y-16 absolute items-center justify-center py-4">
          <PlayButton />
        </div>

        <div className="w-full flex justify-end">
          <p className="flex items-center justify-center space-x-1 px-4 py-1 bg-red-500 rounded-full">
            <span> {selectedAnime?.averageScore! / 10} </span>
            <HiStar />
          </p>
        </div>

        <div className="flex flex-col justify-end w-full overflow-hidden md:max-w-[500px] md:self-start h-full space-y-1 md:space-y-2">
          <h1 className="py-2 text-xl leading-10 lg:text-[32px] max-w-[50%] lg:max-w-[400px]  font-black text-red-600"> { selectedAnime?.title?.native } </h1>
          <h1 className={"text-white text-[18px] md:text-2xl max-w-[300px] md:max-w-[400px] font-medium"}> {title} </h1>
          <p
            className=" w-full overflow-hidden whitespace-nowrap text-ellipsis text-xs text-gray-300"
          >
            {
              selectedAnime?.tags?.map((tag, i) => {
                return " " + tag?.name! + (i !== selectedAnime.tags?.length ? " - " : "");
              })
            }
          </p>
          <div
            className="relative"
          >
            <p
              className="hidden w-full md:block text-xs max-h-[70px] overflow-hidden text-gray-100"
              dangerouslySetInnerHTML={{
                __html: selectedAnime?.description!
              }}
            />
          </div>
        </div>

      </div>
    </>
  );

}