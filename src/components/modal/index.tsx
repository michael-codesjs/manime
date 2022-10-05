import React from "react";
import { createPortal } from "react-dom";
import useDisclosure from "../../hooks/disclosure/use-disclosure";
import { OverlayContainer } from "../overlay/container";
import OverlayUnderlay from "../overlay/underlay";

type ModalProps = {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  disclosure: ReturnType<typeof useDisclosure>;
};

export default function Modal(props: ModalProps) {
  const { children, disclosure } = props;

  const { isOpen } = disclosure;

  return (
    <OverlayContainer disclosure={disclosure}>
      <OverlayUnderlay disclosure={disclosure} />
      <div
        // container
        className={`
          h-full
          w-full
          flex
          flex-col
          items-center
          justify-center
          relative
          p-6
        `}
      >
        <div
          // BODY
          className={`
          ${isOpen ? "scale-1 translate-y-0" : "scale-[0.64] translate-y-32"}
          w-[500px]
          max-w-[100%]
          max-h-[100%]
          z-[2]
          rounded-lg
          bg-white
          dark:bg-gray-800
          transition-all
          duration-200
        `}
          children={children}
        />
      </div>
    </OverlayContainer>
  );
}
