

type SkeletonProps = {
  count?: number,
  className?: string
}

export function Skeletons({ count = 1, className = "" } : SkeletonProps) {

  const skeletons = [];
  
  for(let x = 0; x < count; x++) {
    skeletons.push(
      <div
        key={x}
        className={"bg-gray-200 animate-pulse w-full rounded-lg "+className}
      />
    )
  }

  return <> {skeletons} </>;

}