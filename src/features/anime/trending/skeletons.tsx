import { useMemo } from "react";
import { HiPlay } from "react-icons/hi";
import { Skeletons as BaseSkeletons } from "../../../components/skeletons";


export default function Skeletons() {

  const numberOfSkeletons = 8;
  const skeletons = useMemo(() => {
    const skeletons = [];
    for (let x = 0; x < numberOfSkeletons; x++) {
      skeletons.push(
        <div className="vstack space-y-4 sm:border sm:p-4 box-border rounded-lg">
          <BaseSkeletons className={"h-44 w-full"} />
          <div className="flex flex-col items-center justify-center flex-wrap w-full space-y-3">
            <BaseSkeletons className={"w-5/6 h-5"} />
            <BaseSkeletons className={"w-3/5 h-3"} />
          </div>
          <BaseSkeletons count={1} className={"h-4 w-2/4 self-center bg-purple-100"} />
        </div>
      )
    }
    return skeletons;
  }, []);

  return (
    <>
      <BaseSkeletons
        className={"w-full h-80 flex items-center justify-center"}
        children={
          <BaseSkeletons
            className="w-16 h-16 rounded-full bg-purple-200 border-8 border-purple-300 flex items-center justify-center"
            children={
              <HiPlay className="h-8 w-8 text-purple-300"/>
            }
          />
        }
      />
      <div className="w-full grid gap-x-4 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> {skeletons} </div>
    </>
  )

}