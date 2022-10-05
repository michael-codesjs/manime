


export function IsLoadingOverlay() {

  return (
    <div
      className={`
        flex
        items-center
        justify-center
        w-full
        h-full
        absolute
        top-0
        left-0
        rounded-[inherit]
      `}
      style={{
        background: "rba(0,0,0,0.6)"
      }}
    >
      <div
        className={`
          h-5
          w-5
          rounded-full
          border-[3px]
          border-whiteAlpha
          border-r-gray-100
          animate-spin
        `}
      />
    </div>
  )

}