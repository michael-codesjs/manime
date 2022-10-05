import { forwardRef } from "react";
import React from "react";

export const ButtonPrimary = forwardRef((props,ref) => {
  return (
    <button
      className={"bg-purple-500 focus: text-white rounded-full"}
      { ...props }
    />
  )
});