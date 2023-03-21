import axios from "axios";
import React from "react";
import { useInfiniteQuery } from "react-query";

export default function InfiniteQueryesTest() {
  const fetchGroup = ({ pageParam = 1 }) => {
    return axios.get(
      `http://localhost:4000/products?_limit=3&_page=${pageParam}`
    );
  };
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["productsifinite"],
    fetchGroup,
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 3) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  return (
    <div className="flex justify-center flex-col items-center">
      {data?.pages.map((group, i) => {
        return (
          <div key={i}>
            {group?.data.map((el) => {
              return (
                <div
                  key={el.id}
                  className="h-full p-3 flex justify-center  items-center flex-col"
                >
                  <img
                    className="object-contain aspect-square"
                    src={el.img}
                    alt={el.name}
                    width={"350"}
                    height="350"
                  />
                  <p className="text-center pt-4">{el.name}</p>
                </div>
              );
            })}
          </div>
        );
      })}
      <div>
        <button
          className="rounded-lg text-white w-24 h-12 border border-blue-500 bg-gray-500 disabled:opacity-30 disabled:cursor-not-allowed"
          onClick={fetchNextPage}
          disabled={!hasNextPage}
        >
          load more
        </button>
      </div>
    </div>
  );
}
