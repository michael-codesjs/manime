import { HiHeart } from "react-icons/hi";

export default function Footer() {
  return (
    <footer
      className={`
      py-10
      bg-white
      dark:bg-gray-900
      dark:text-gray-50
      border-t-2
      dark:border-gray-800
      vstack
      items-center
      justify-center
      space-y-4
    `}
    >
      <p className="text-center">
        Made with <HiHeart className="text-red-600 w-6 h-6 inline"/> by{" "}
        <a
          href={"https://github.com/michael-codesjs"}
          target={"_blank"}
          className={"font-semibold text-red-600"}
        >Michael Phiri</a>
      </p>
    </footer>
  );
}
