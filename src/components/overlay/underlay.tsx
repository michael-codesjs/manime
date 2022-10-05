import React from "react";
import useDisclosure from "../../hooks/disclosure/use-disclosure";

interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className" | "onClick"> {
  disclosure: ReturnType<typeof useDisclosure>;
}

export default function OverlayUnderlay(props: Props) {
  const { disclosure } = props;

  return (
    <div
      className={`
        bg-blackAlpha
        z-[1]
        absolute
        top-0
        left-0
        w-screen
        h-screen
        backdrop-blur-sm
        transition-all
        duration-300
        ${disclosure.isOpen ? "duration-200" : "durration-300" }
      `}
      onClick={disclosure.onClose}
    />
  );
}
