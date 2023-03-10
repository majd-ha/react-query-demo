import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import NotAuthorized from "../pages/NotAuthorized";

export default function AdminLayout() {
  const [currentUser] = useOutletContext();
  return <div>{currentUser === "majd" ? <Outlet /> : <NotAuthorized />}</div>;
}
