import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import CustomCard from "../components/CustomCard";
import SkiltionCard from "../components/SkiltionCard";

export default function DashBoard() {
  const fetchUsers = () => {
    return axios.get("http://localhost:4000/users");
  };
  const { isLoading, error, data: users } = useQuery("users", fetchUsers);
  if (isLoading) {
    return (
      <div className="flex justify-center flex-col items-center">
        <SkiltionCard />
      </div>
    );
  }
  if (error) {
    throw Error("could not fetch users");
  }
  return (
    <div className="flex justify-center flex-col items-center">
      {users?.data.map((el) => {
        return <CustomCard key={el.id} name={el.name} desc={el.id} />;
      })}
    </div>
  );
}
