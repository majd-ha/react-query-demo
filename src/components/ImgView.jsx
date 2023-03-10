import React, { useState } from "react";
import CloseIcon from "../Icons/CloseIcon";

export default function ImgView({ show, showfn, src }) {
  const [more, setmore] = useState(false);
  return (
    <div
      className={
        show
          ? "absolute top-[15%] right-[10%] w-[80%] h-[80%] rounded-lg shadow-xl bg-gray-500 p-2 overflow-hidden"
          : "hidden"
      }
    >
      <div className="w-full flex justify-end p-5">
        <button
          onClick={() => {
            showfn(false);
          }}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="grid grid-cols-6 gap-3 h-[85%]">
        <div className="h-[80%] overflow-hidden pl-5 rounded-xl col-span-2">
          <img src={src} alt="super hero" width={400} className="rounded-xl" />
        </div>
        <div className="col-span-4 p-3 overflow-auto h-full">
          <h1
            className={
              more ? "h-full text-white" : "h-20 overflow-clip text-white"
            }
            onClick={() => {
              setmore(false);
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
            magnam? Molestiae repudiandae commodi sit unde quam! Tempora,
            obcaecati. Labore rem, quae repellat omnis dolor tempora itaque amet
            necessitatibus quo iste. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam, magnam? Molestiae repudiandae commodi sit
            unde quam! Tempora, obcaecati. Labore rem, quae repellat omnis dolor
            tempora itaque amet necessitatibus quo iste. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ullam, magnam? Molestiae
            repudiandae commodi sit unde quam! Tempora, obcaecati. Labore rem,
            quae repellat omnis dolor tempora itaque amet necessitatibus quo
            iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ullam, magnam? Molestiae repudiandae commodi sit unde quam! Tempora,
            obcaecati. Labore rem, quae repellat omnis dolor tempora itaque amet
            necessitatibus quo iste. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam, magnam? Molestiae repudiandae commodi sit
            unde quam! Tempora, obcaecati. Labore rem, quae repellat omnis dolor
            tempora itaque amet necessitatibus quo iste. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ullam, magnam? Molestiae
            repudiandae commodi sit unde quam! Tempora, obcaecati. Labore rem,
            quae repellat omnis dolor tempora itaque amet necessitatibus quo
            iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ullam, magnam? Molestiae repudiandae commodi sit unde quam! Tempora,
            obcaecati. Labore rem, quae repellat omnis dolor tempora itaque amet
            necessitatibus quo iste. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam, magnam? Molestiae repudiandae commodi sit
            unde quam! Tempora, obcaecati. Labore rem, quae repellat omnis dolor
            tempora itaque amet necessitatibus quo iste. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ullam, magnam? Molestiae
            repudiandae commodi sit unde quam! Tempora, obcaecati. Labore rem,
            quae repellat omnis dolor tempora itaque amet necessitatibus quo
            iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ullam, magnam? Molestiae repudiandae commodi sit unde quam! Tempora,
            obcaecati. Labore rem, quae repellat omnis dolor tempora itaque amet
            necessitatibus quo iste. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam, magnam? Molestiae repudiandae commodi sit
            unde quam! Tempora, obcaecati. Labore rem, quae repellat omnis dolor
            tempora itaque amet necessitatibus quo iste. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ullam, magnam? Molestiae
            repudiandae commodi sit unde quam! Tempora, obcaecati. Labore rem,
            quae repellat omnis dolor tempora itaque amet necessitatibus quo
            iste. v Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ullam, magnam? Molestiae repudiandae commodi sit unde quam! Tempora,
            obcaecati. Labore rem, quae repellat omnis dolor tempora itaque amet
            necessitatibus quo iste. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam, magnam? Molestiae repudiandae commodi sit
            unde quam! Tempora, obcaecati. Labore rem, quae repellat omnis dolor
            tempora itaque amet necessitatibus quo iste. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ullam, magnam? Molestiae
            repudiandae commodi sit unde quam! Tempora, obcaecati. Labore rem,
            quae repellat omnis dolor tempora itaque amet necessitatibus quo
            iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ullam, magnam? Molestiae repudiandae commodi sit unde quam! Tempora,
            obcaecati. Labore rem, quae repellat omnis dolor tempora itaque amet
            necessitatibus quo iste. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam, magnam? Molestiae repudiandae commodi sit
            unde quam! Tempora, obcaecati. Labore rem, quae repellat omnis dolor
            tempora itaque amet necessitatibus quo iste. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ullam, magnam? Molestiae
            repudiandae commodi sit unde quam! Tempora, obcaecati. Labore rem,
            quae repellat omnis dolor tempora itaque amet necessitatibus quo
            iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ullam, magnam? Molestiae repudiandae commodi sit unde quam! Tempora,
            obcaecati. Labore rem, quae repellat omnis dolor tempora itaque amet
            necessitatibus quo iste. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam, magnam? Molestiae repudiandae commodi sit
            unde quam! Tempora, obcaecati. Labore rem, quae repellat omnis dolor
            tempora itaque amet necessitatibus quo iste.
          </h1>
          <p
            className={more ? "hidden" : "text-blue-900 mt-5 cursor-pointer"}
            onClick={() => {
              setmore(true);
            }}
          >
            read more....
          </p>
        </div>
      </div>
    </div>
  );
}
