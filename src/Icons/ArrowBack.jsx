import React from "react";

export default function ArrowBack() {
  return (
    <div className="w-12 h-12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <line
          x1="216"
          x2="40"
          y1="128"
          y2="128"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        />
        <polyline
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
          points="112 56 40 128 112 200"
        />
      </svg>
    </div>
  );
}
