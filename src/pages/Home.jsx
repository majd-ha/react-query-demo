import React from "react";
import SkilitonAnimation from "../components/SkilitonAnimation";
import SkiltionCard from "../components/SkiltionCard";

export default function Home() {
  const arr = [3, 34, 4, 5];
  return (
    <div>
      <div>
        <SkilitonAnimation count={arr} />
        <SkiltionCard />
      </div>
    </div>
  );
}
