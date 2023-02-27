import React from "react";

export default function CustomCard({ name, src, desc }) {
  return (
    <div className="w-[700px] h-550px shadow-lg p-8">
      <div className="flex justify-start gap-4 items-center">
        <div className="w-[70px] h-[70px] rounded-full overflow-clip">
          <img src={src} alt="super hero img" width={70} height={70} />
        </div>

        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <div className="shadow-md italic mt-4 p-3">{desc}</div>
    </div>
  );
}
