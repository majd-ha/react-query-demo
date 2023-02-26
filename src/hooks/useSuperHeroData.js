import axios from "axios";
import { useQuery } from "react-query";

export const useSuperHeroData = (onError, onSuccess) => {
  const fetchSuper = () => {
    return axios.get("http://localhost:4000/superheros");
  };
  // eslint-disable-next-line no-unused-vars
  return useQuery("superhero-query", fetchSuper, {
    cacheTime: 5000,
    onError,
    onSuccess,
  });
};
