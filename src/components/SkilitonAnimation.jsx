import React from "react";

export default function SkilitonAnimation({ count }) {
  return (
    <div className="w-[800px] rounded-lg mx-auto shadow-lg">
      <div className="h-12 w-full">
        <p className="w-36 h-7 mx-auto rounded-lg my-7 m"></p>
      </div>
      {count.map((el) => {
        return (
          <div className="w-full flex justify-around  " key={el}>
            <p className="w-80 h-7 rounded-lg my-7 m"></p>
            <p className="w-80 h-7 rounded-lg my-7 m"></p>
          </div>
        );
      })}
    </div>
  );
}
