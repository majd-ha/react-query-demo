import React from "react";
import { Outlet } from "react-router-dom";

export default function SuperHerolayout() {
  return (
    <div>
      <h1 className="text-center p-5">RQ super hero</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
