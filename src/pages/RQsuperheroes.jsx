import React, { useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import CardView from "../components/CardView";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export default function RQsuperheroes() {
  const myRef = useRef(null);
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
  if (isError) {
    throw Error(error.message);
  }

  return (
    <div>
      <div className="flex justify-center">
        <CardView
          tabname={"RQSuper Heroes"}
          data={data?.data}
          load={isLoading}
          err={error}
        />
      </div>

      <main>
        <div
          className="flex justify-center items-center mb-20"
          onClick={() =>
            setTimeout(() => {
              myRef.current.scrollIntoView({ behavior: "smooth" });
            }, 1000)
          }
        >
          <Link
            to={"addHero"}
            className="w-24 h-12 pt-3 text-center bg-gray-400 text-white rounded-lg"
          >
            add hero
          </Link>
        </div>
        <div ref={myRef} className="mt-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
