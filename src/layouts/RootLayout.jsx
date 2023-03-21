import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function RootLayout({ children }) {
  const [currentUser, setCurrentUser] = useState("majd");
  return (
    <div>
      <header className="flex justify-start  bg-gray-500 items-center">
        <nav className="flex justify-between w-2/4 h-16 text-white items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/profile/superhroes"}>superHeroes</Link>
          <Link to={"/profile/products"}>products</Link>
          <Link to={"/profile/infinte-pro"}>Infinite products</Link>
          <Link to={"/profile/Rqsuperhroes/heros"}>RQsuperheroes</Link>
          <Link to={"/adminPanel/"}>Users</Link>
          {currentUser === "majd" ? (
            <Link to={"/switchUser"}>Switch User</Link>
          ) : (
            <></>
          )}
        </nav>
      </header>
      <main className="mt-10">
        <Outlet context={[currentUser, setCurrentUser]} />
      </main>
    </div>
  );
}
