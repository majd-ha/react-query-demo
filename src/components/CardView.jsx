import React from "react";
import CustomTable from "./CustomTable";
import SkilitonAnimation from "./SkilitonAnimation";

export default function CardView({ tabname, data, load, err }) {
  const arr = [3, 4, 5];
  if (load) {
    return <SkilitonAnimation count={arr} />;
  }
  // if (err) {
  //   return <div>{err.message}</div>;
  // }
  return <CustomTable tabname={tabname} data={data} err={err} />;
}
