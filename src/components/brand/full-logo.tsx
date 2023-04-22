import { Logo } from "./logo";

export function FullLogo() {
  return (
    <div className="flex items-center justify-start min-w-[160px] space-x-[6px]">
      <Logo />
      <h1 className="flex items-baseline justify-center space-x-[6px]">
        <p className="text-[26px] font-bold dark:text-gray-50">anime</p>
        <div className="w-2 h-2 bg-red-600 animate-bounce rounded-full" />
      </h1>
    </div>
  )
}