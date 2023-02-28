import React from "react";
import { Link, useRouteError } from "react-router-dom";
import ArrowBack from "../Icons/ArrowBack";
import ErorrSvg from "../Icons/ErorrSvg";
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-green-500 text-5xl text-center font-mono">
          Ooops ..! we have a problem
        </h1>
        <p className="text-3xl font-mono mt-8">{error.message}</p>
        <p className="text-2xl mt-6 italic">
          Go Back{" "}
          <Link to={-1} className="text-green-600">
            <ArrowBack />
          </Link>
        </p>
      </div>

      <ErorrSvg />
    </div>
  );
}
