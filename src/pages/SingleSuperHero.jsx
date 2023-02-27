import React from "react";
import { useParams } from "react-router-dom";
import CustomCard from "../components/CustomCard";
import SkiltionCard from "../components/SkiltionCard";
import { useSingleHero } from "../hooks/useSingleHero";

export default function SingleSuperHero() {
  const { heroId } = useParams();
  const { isError, isLoading, data } = useSingleHero(heroId);
  if (isError) {
    throw Error("could not find this super hero");
  }
  return (
    <div className="flex justify-center">
      {isLoading ? (
        <SkiltionCard />
      ) : (
        <CustomCard
          name={data?.data.name}
          src={data?.data.img}
          desc={data?.data.description}
        />
      )}
    </div>
  );
}
