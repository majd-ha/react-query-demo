import React from "react";

export default function CusstomSlider({ src, name, load }) {
  if (load) {
    return <h2>loading...</h2>;
  }
  return (
    <div className="w-1/3 h-full p-3 ">
      <img className="object-cover aspect-auto" src={src} alt={name} />
      <p className="text-center pt-4">{name}</p>
    </div>
  );
}
