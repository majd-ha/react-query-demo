import React from "react";
import { Link } from "react-router-dom";
import NotFoundSvg from "../Icons/NotFoundSvg";

export default function NotFound() {
  return (
    <div className="flex justify-around">
      <div>
        <p className="text-6xl font-semibold uppercase text-red-900">
          are you lost ?{" "}
        </p>
        <Link to={"/"} className="text-green-700 text-2xl mt-20 block">
          Home
        </Link>
      </div>
      <NotFoundSvg />
    </div>
  );
}
