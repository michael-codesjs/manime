import React from "react";
import { IsLoadingOverlay } from "./is-loading-overlay";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = (props: Props) => {
  const { isLoading, children, ...rest } = props;

  return (
    <button
      style={{
        position: "relative"
      }}
      {...rest}
    >{isLoading ? <IsLoadingOverlay /> : children}</button>
  );

};
