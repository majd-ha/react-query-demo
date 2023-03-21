import React from "react";

export default function CustomButton({
  content,
  width,
  height,
  bg,
  borderCol,
  children,
  ...props
}) {
  return (
    <button
      className={`rounded-lg text-white ${width} ${height} ${bg}  ${borderCol}`}
      {...props}
    >
      {children}
    </button>
  );
}
