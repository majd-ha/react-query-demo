import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import CusstomSlider from "../components/CusstomSlider";

export default function PaginatedSample() {
  const [pageNumber, setPageNumber] = useState(1);
  const fetcherfunc = (pageNumber) => {
    return axios.get(
      `http://localhost:4000/products?_limit=3&_page=${pageNumber}`
    );
  };
  const { data, isLoading } = useQuery(["products", pageNumber], () =>
    fetcherfunc(pageNumber)
  );
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="mx-auto mt-5">
      <div className="p-5 flex justify-evenly">
        {data?.data.map((el) => {
          return (
            <CusstomSlider
              key={el.id}
              src={el.img}
              name={el.name}
              load={isLoading}
            />
          );
        })}
      </div>
      <div className="h-40 flex justify-center gap-5">
        <button
          className="cursor-pointer"
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          previous
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 3}
        >
          next
        </button>
      </div>
    </div>
  );
}
