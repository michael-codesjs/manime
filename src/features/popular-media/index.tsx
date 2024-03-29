import { useMemo } from "react";
import { useQuery } from "react-query";
import { getPopularMedia } from "../../api/queries";
import SeeMoreButton from "../../components/buttons/see-more";
import ScrollFade from "../../components/scroll-fade";
import { MediaType } from "../../types/api";
import { Anime } from "./media";
import Skeletons from "./skeletons";

type PopularMediaProps = {
  type: MediaType;
};

export function PopularMedia(props: PopularMediaProps) {
  const { type } = props;

  const { isLoading, data } = useQuery(
    [`popular-${type}`, { type, page: 1, perPage: 8 }],
    getPopularMedia,
    {
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchInterval: 0,
      retry: 3,
      retryOnMount: true,
      retryDelay: 0,
      refetchOnWindowFocus: false,
    }
  );

  const memoizedContent = useMemo(() => {
    return (
      data &&
      data.media!.map((media) => {
        return <Anime key={media?.id.toString()} media={media!} />;
      })
    );
  }, [data]);

  const memoizedSkeletons = useMemo(() => <Skeletons />, []);

  return (
    <section
      className={`
        w-full
        box-border
        p-0
        vstack
        space-y-4
        md:space-y-0
      `}
    >
      <h2
        className={`
          w-full
          px-7
          md:px-0
          text-lg
          font-semibold
          dark:text-gray-100
          capitalize
        `}
      >
        Popular {type.toLowerCase()}
      </h2>

      <div
        className={`
          flex
          flex-row
          h-full
          md:flex-col
          space-x-6
          md:space-x-0
          md:space-y-2
          w-full
          relative
        `}
      >
        <div
          className={`
            flex
            flex-row
            md:flex-col
            items-center
            w-full
            overflow-x-scroll
            md:overflow-x-hidden
            px-7
            md:px-0
            space-x-0
            md:space-y-3
          `}
        >
          <ScrollFade
            // scroll fade that is on the left for small screens
            height={"full"}
            width={7}
            direction={"right"}
            style={{
              transform: "translateX(-" + 7 * 4 + "px)",
              position: "absolute",
            }}
            className={"md:hidden"}
          />

          <div
            className={`
              flex
              flex-row
              md:flex-col
              md:w-full
              md:overflow-scroll
              md:pb-8
              space-x-6
              md:space-x-0
              md:space-y-5
              p-[1px]
            `}
          >
            {memoizedContent}
            {isLoading && memoizedSkeletons}
          </div>

          <SeeMoreButton />
        </div>

        <ScrollFade
          // scroll fade that is on the right for small screens
          height={"full"}
          width={7}
          direction={"left"}
          style={{
            right: 0,
            bottom: 0,
          }}
          className={"md:hidden"}
        />

        <ScrollFade
          // scroll fade that is at the bottom for larger screens
          height={8}
          width={"full"}
          direction={"top"}
          style={{
            bottom: "46px",
          }}
          className={"hidden md:block"}
        />
      </div>
    </section>
  );
}
