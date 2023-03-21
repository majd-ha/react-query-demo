import React, { useRef, useState } from "react";

export default function CustomInput({
  type,
  inputstyle,
  setValue,
  icon,
  opIcon,
  error,
  ...props
}) {
  //   const [show, setShow] = useState(true);
  const typeRef = useRef();
  const [hide, sethide] = useState(true);
  // const toggleIcon = () => {
  //   sethide(!hide);
  // };
  const changType = () => {
    if (type === "password") {
      sethide(!hide);
    }
  };
  return (
    <div className="relative w-[90%]">
      <input
        ref={typeRef}
        type={type === "password" ? (hide ? type : "text") : type}
        className={` rounded-lg indent-2 w-full outline-none border border-gray-400 h-8 ${inputstyle} ${
          error ? "border-red-600" : ""
        }`}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {...props}
      />
      <p
        onClick={changType}
        className={`mr-1 ${
          error ? "text-red-600" : "text-gray-400"
        } select-none cursor-pointer absolute right-0 top-0 bottom-0 w-[10%]  h-full flex justify-center items-center`}
      >
        {hide ? icon : opIcon}
      </p>
    </div>
  );
}
