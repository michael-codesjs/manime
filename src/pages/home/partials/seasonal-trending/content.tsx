import { useMemo, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import { UseQueryResult } from "react-query";
import PlayButton from "@components/buttons/play";
import useBreakpointValue from "@hooks/media/use-breakpoint-value";
import { Page } from "@typings/api";

type QueryResult = UseQueryResult<Page, any>;

type Props = {
  data: QueryResult["data"];
};
export default function Content(props: Props) {
  const data = props.data!;

  const [selectedAnimeIndex, setSelectedAnimeIndex] = useState(0);
  const selectedAnime = useMemo(
    () => data.media![selectedAnimeIndex],
    [selectedAnimeIndex, data.media]
  );

  const isAtBegining = selectedAnimeIndex === 0;
  const isAtEnd = selectedAnimeIndex === data.media?.length! - 1;

  const title =
    selectedAnime?.title?.english ||
    selectedAnime?.title?.romaji ||
    selectedAnime?.title?.romaji;
  const nativeTitle = (
    selectedAnime?.title?.native !== title
      ? selectedAnime?.title?.native?.replace(/[A-Za-z0-9]/g, "")
      : selectedAnime?.studios?.nodes![0]?.name + "'s"
  )!;

  const nextAnime = () => setSelectedAnimeIndex((index) => index + 1);
  const previousAnime = () => setSelectedAnimeIndex((index) => index - 1);

  return (
    <>
      <div
        className="w-full h-[320px] lg:h-[340px] rounded-lg relative flex space-y-1 flex-col items-center justify-center p-4 md:p-8 md:px-6 bg-no-repeat bg-cover md:bg-cover"
        style={{
          backgroundColor: selectedAnime?.coverImage?.color!,
          backgroundImage: useBreakpointValue({
            base: `
            linear-gradient(to top right, rgba(0,0,0,0.8) 30%,rgba(0,0,0,0.2)),
            url(${selectedAnime?.coverImage?.extraLarge})
            `,
            md: `
            linear-gradient(to top right, rgba(0,0,0,1) 20%, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0.1)),
            url(${selectedAnime?.coverImage?.extraLarge})
            `,
          }),
        }}
      >
        <div className="absolute -translate-y-4 sm:-translate-y-0-0 z-[2] sm:scale-[2]">
          <PlayButton />
        </div>

        <div className="w-full flex justify-between">
          <div className="stacked-avatars">
            {selectedAnime?.characters?.nodes?.map((character) => {
              return (
                <img
                  alt={"trending anime this season cover"}
                  src={character?.image?.medium!}
                  className={"w-6 h-6 min-w-[24px] rounded-full object-cover"}
                />
              );
            })}
          </div>
          <p className="flex items-center justify-center space-x-1 px-4 py-1 text-sm text-white medium bg-red-600 rounded-full">
            <span> {selectedAnime?.averageScore! / 10} </span>
            <HiStar />
          </p>
        </div>

        <div className="flex flex-col justify-end w-full h-full overflow-hidden md:max-w-[80%] lg:max-w-[50%] md:self-start space-y-2 md:space-y-3">
          <h1 className="max-w-[76%] lg:max-w-[60%] text-2xl lg:text-xl overflow-hidden whitespace-nowrap text-ellipsis text-red-600 font-semibold">
            {" "}
            {nativeTitle}{" "}
          </h1>
          <h1 className="text-xl lg:text-2xl font-medium text-white max-w-[100%] lg:max-w-[100%]">
            {" "}
            {title}{" "}
          </h1>
          <p className="text-xs text-gray-300">
            {" "}
            {selectedAnime?.status} | {selectedAnime?.episodes?.toString()}{" "}
            episodes{" "}
          </p>
        </div>

        <div className="w-full flex justify-between md:justify-end space-x-3 absolute md:bottom -translate-y-4 md:-translate-y-0-0 md:bottom-0 p-4 md:px-6">
          <button
            disabled={isAtBegining}
            onClick={previousAnime}
            className={
              "py-1 px-1 rounded-full bg-whiteAlpha opacity-20 hover:opacity-100 md:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            }
          >
            <HiChevronLeft size={"28px"} className={"text-white"} />
          </button>
          <button
            disabled={isAtEnd}
            onClick={nextAnime}
            className={
              "py-1 px-1 rounded-full bg-whiteAlpha opacity-20 hover:opacity-100 md:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            }
          >
            <HiChevronRight size={"28px"} className={"text-white"} />
          </button>
        </div>
      </div>
    </>
  );
}
