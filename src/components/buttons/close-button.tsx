import { ButtonHTMLAttributes } from "react";

export default function CloseButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`
      hover:bg-gray-200
      dark:hover:bg-gray-700
      text-gray-900
      dark:text-gray-300
      text-3xl
      px-3
      py-[2px]
      rounded-md
    `}
      {...props}
    >
      &times;
    </button>
  );
}
