import { RiSearch2Line } from "react-icons/ri";

export default function Search() {

  return (
    <form
      id={"search"}
      className={"pb-6 md:pb-0 sm:pt-6 px-6 md:border-l"}
    >
      <label
        htmlFor="search-input"
        className={`
          w-full
          h-11
          px-5
          space-x-4
          flex
          items-center
          justify-center
          bg-gray-50
          border-2
          border-gray-100
          rounded-full
          focus-within:border-blue-400
          transition-all
        `}
      >
        <RiSearch2Line className={"text-gray-600 w-[18px] h-[18px]"} />
        <input
          type="search"
          className="w-full rounded-full h-full text-[14px] placeholder:text-gray-600 focus:outline-none bg-inherit"
          placeholder="search"
        />
      </label>
    </form>
  )

}