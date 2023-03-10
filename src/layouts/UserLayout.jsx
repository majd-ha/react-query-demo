import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import NotFound from "../pages/NotFound";

export default function UserLayout() {
  const [currentUser] = useOutletContext();
  return <div>{currentUser !== null ? <Outlet /> : <NotFound />}</div>;
}
