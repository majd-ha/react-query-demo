import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import CardView from "./CardView";

export default function RQsuperheroes() {
  const onError = (error) => {
    console.log("this is error : ", error);
  };
  const onSuccess = (data) => {
    console.log("this is the data  : ", data);
  };
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, isError, error } = useSuperHeroData(
    onError,
    onSuccess
  );

  return (
    <div className="flex justify-center">
      <CardView
        tabname={"RQSuper Heroes"}
        data={data?.data}
        load={isLoading}
        err={error}
      />
    </div>
  );
}
