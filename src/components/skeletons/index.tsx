

type SkeletonProps = {
  count?: number,
  className?: string
  children?: React.ReactNode
}

export function Skeletons({ count = 1, className = "", children } : SkeletonProps) {

  const skeletons = [];
  
  for(let x = 0; x < count; x++) {
    skeletons.push(
      <div
        key={x}
        className={"bg-gray-200 animate-pulse rounded-lg "+className}
        children={children}
      />
    )
  }

  return <> {skeletons} </>;

}