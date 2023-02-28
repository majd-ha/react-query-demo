import React from "react";

export default function SkiltionCard() {
  return (
    <div className="w-[700px] h-550px shadow-lg p-8">
      <div className="flex justify-start gap-4 items-center w-full h-1/4">
        {/* <img
          src={src}
          alt="super hero img"
          width={70}
          height={70}
          className="rounded-full"
        /> */}
        <div className="rounded-full w-[70px] h-[70px] m"></div>
        <p className="text-3xl font-bold w-24 rounded-lg h-5 m"></p>
      </div>
      <div className="mt-10">
        <div className="shadow-md italic mt-4 h-3  rounded-md m"></div>
        <div className="shadow-md italic mt-4 h-3  rounded-md m"></div>
        <div className="shadow-md italic mt-4 h-3 w-5/6 rounded-md m"></div>
      </div>
    </div>
  );
}
