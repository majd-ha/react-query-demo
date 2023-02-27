import axios from "axios";
import { useQuery } from "react-query";

export const useSingleHero = (heroId) => {
  const singleFetcher = (heroId) => {
    return axios.get(`http://localhost:4000/superheros/${heroId}`);
  };
  return useQuery(["single-hero", heroId], () => singleFetcher(heroId));
};
