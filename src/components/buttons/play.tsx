import React from "react";
import { HiPlay } from "react-icons/hi";

export default function PlayButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      aria-label="anime-play-button"
      className={"flex items-center justify-center rounded-full w-10 h-10 md:w-8 md:h-8 bg-gray-700 text-red-600 transition-all hover:scale-125"}
      {...props}
    >
      <HiPlay className="w-6 h-6"/> 
    </button>
  )
}