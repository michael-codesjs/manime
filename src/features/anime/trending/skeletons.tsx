import { Skeletons as CustomSkeletons } from "../../../components/skeletons"
import { useMemo } from "react";

export default function Skeletons() {

  const skeletons = useMemo(() => Array(7).fill(null).map(() => {
    return (
      <div className="group flex flex-col space-y-4 rounded-lg">
        <CustomSkeletons className="h-40" />
        <div className="flex flex-col space-y-2">
          <CustomSkeletons className="h-4" />
          <CustomSkeletons className="w-3/4 h-4" />
        </div>
      </div>
    )
  }), []);

  return <> {skeletons} </>

}