import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const fetchUsers = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchSkills = (ownerId) => {
  return axios.get(`  http://localhost:4000/channels/${ownerId}`);
};

export default function DependentQueries({ email }) {
  const { data: user } = useQuery(["user", email], () => fetchUsers(email));
  const ownerId = user?.data.name;
  const { data: skill } = useQuery(
    ["skill", ownerId],
    () => fetchSkills(ownerId),
    {
      enabled: !!ownerId,
    }
  );
  return (
    <div>
      <h1>Dependent Query</h1>
      <h2>{user?.data.id}</h2>
      <p>{skill?.data.skills[0]}</p>
    </div>
  );
}
