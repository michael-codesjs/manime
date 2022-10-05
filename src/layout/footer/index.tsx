import React from "react";
import { AiFillFacebook, AiFillHeart } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Logo } from "../../components/brand";

/** Displays footer via a portal in the main component */
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
