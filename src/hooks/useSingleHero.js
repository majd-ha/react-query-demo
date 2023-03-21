import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

export const useSingleHero = (heroId) => {
  const queryClient = useQueryClient();
  const singleFetcher = (heroId) => {
    return axios.get(`http://localhost:4000/superheros/${heroId}`);
  };
  return useQuery(["single-hero", heroId], () => singleFetcher(heroId), {
    initialData: () => {
      const hero = queryClient
        .getQueryData("superhero-query")
        ?.data?.find((hero) => hero.id === parseInt(heroId));
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
