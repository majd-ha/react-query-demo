import React from "react";
import SkilitonAnimation from "./SkilitonAnimation";

export default function Home() {
  const arr = [3, 34, 4, 5];
  return (
    <div>
      <div>
        <SkilitonAnimation count={arr} />
      </div>
    </div>
  );
}
