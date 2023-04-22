import { RiSearch2Line } from "react-icons/ri";

export const Search: React.FC = () => {

  return (
    <form id={"search"} className="pb-6 md:pb-0 sm:pt-6 px-6 md:border-l-2 dark:md:border-gray-800">
      <label
        htmlFor="search-input"
        className={`
          group w-full h-11 px-5 space-x-4 flex items-center justify-center bg-gray-50 dark:bg-gray-700
          border-2 border-gray-100 dark:border-gray-700 rounded-full focus-within:border-blue-600 dark:focus-within:border-blue-600
          focus-within:shadow-sm transition-[border-color]
        `}
      >
        <RiSearch2Line className="text-gray-600 dark:group-focus-within:text-white dark:text-gray-300 w-[18px] h-[18px]" />
        <input
          id="search-input"
          type="search"
          placeholder="search"
          className={`
            w-full rounded-full h-full text-[14px] placeholder:text-gray-600 dark:placeholder:text-gray-300
            focus:outline-none bg-inherit dark:focus:placeholder:text-gray-100 dark:text-white
          `}
        />
      </label>
    </form>
  )

}