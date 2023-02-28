import axios from "axios";
import React, { useEffect, useState } from "react";
import CardView from "../components/CardView";
export default function SuperHeroes() {
  const [heroes, setheroes] = useState([]);
  const [error, seterror] = useState("");
  const [loading, setloadings] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/superheros")
      .then((res) => {
        setheroes(res.data);
        setloadings(false);
      })
      .catch((error) => {
        seterror(error);
        setloadings(false);
      });
  }, []);
  if (error) {
    throw Error(error.message);
  }
  return (
    <div className="flex justify-center">
      <CardView
        tabname={"SuperHeroes"}
        data={heroes}
        load={loading}
        err={error}
      />
    </div>
  );
}
