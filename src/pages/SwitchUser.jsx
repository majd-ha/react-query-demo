import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Navigate, useOutletContext } from "react-router-dom";

export default function SwitchUser() {
  const [, setCurrentUser] = useOutletContext();
  const [pop, setPop] = useState(false);
  const { data: user } = useQuery("user-select", () => {
    return axios.get("http://localhost:4000/users");
  });
  return (
    <div className="mx-auto my-10 flex justify-center">
      {pop ? <Navigate to={"/"} /> : <></>}
      <ul>
        {user?.data.map((el) => {
          return (
            <li
              className={"cursor-pointer w-52 h-16 text-center text-3xl"}
              onClick={() => {
                setPop(true);
                setCurrentUser(el.name);
              }}
              key={el.id}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
