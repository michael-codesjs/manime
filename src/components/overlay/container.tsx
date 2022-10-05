import { createPortal } from "react-dom";
import useDisclosure from "../../hooks/disclosure/use-disclosure";

type Props = {
  disclosure: ReturnType<typeof useDisclosure>;
  children: React.ReactNode
};

export function OverlayContainer(props: Props) {
  const { disclosure, children } = props;

  return createPortal(
    <div
      className={`
        fixed
        ${disclosure.isOpen ? "z-20 opacity-100" : "z-[-1] opacity-0"}
        top-0
        left-0
        h-screen
        w-screen
        transition-all
        ${disclosure.isOpen ? "duration-200" : "durration-300" }
      `}
      children={children}
    />,
    document.getElementById("portal")!
  );
}
