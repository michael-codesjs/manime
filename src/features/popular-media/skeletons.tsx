import { useMemo } from "react";
import { Skeletons as CustomSkeletons } from "../../components/skeletons";

export default function Skeletons() {

  const numberOfSkeletons = 5;
  const skeletons = useMemo(() => {
    const skeletons = [];
    for (let x = 0; x < numberOfSkeletons; x++) {
      skeletons.push(
        <div
          key={x}
          className={"flex flex-col md:flex-row w-full min-w-[220px] space-y-4 md:space-y-0 md:space-x-4 border md:dark:bg-transparent dark:border-gray-800 p-4 md:p-0 md:border-0 shadow-sm md:shadow-none rounded-lg"}
        >
          <CustomSkeletons className={"w-full md:w-[72px] min-w-[72px] h-40 md:h-[90px] rounded-xl"} />
          <div className="vstack space-y-2 w-full">
            <CustomSkeletons className={"w-5/6 h-4 min-h-[16px] rounded-md"} />
            <div className="vstack space-y-2 w-full h-full">
              <CustomSkeletons className={"h-[14px] w-full rounded-md"} />
              <CustomSkeletons className={"h-[14px] w-3/5 rounded-md"} />
            </div>
            <div className="flex items-center justify-between w-full h-7 min-h-[28px] space-x-5">
              <CustomSkeletons className={"h-[10px] min-h-[12px] w-12 rounded-full"} />
              <CustomSkeletons className={"h-full w-7 rounded-3xl bg-blue-200"} />
            </div>
          </div>
        </div>
      )
    }
    return skeletons;
  }, []);

  return <> {skeletons} </>
}