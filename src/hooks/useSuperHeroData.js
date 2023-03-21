import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useSuperHeroData = (onError, onSuccess) => {
  const fetchSuper = () => {
    return axios.get("http://localhost:4000/superheros");
  };

  return useQuery("superhero-query", fetchSuper, {
    cacheTime: 5000,
    onError,
    onSuccess,
  });
};

export const useAddHero = () => {
  const queryClinet = useQueryClient();
  const addhero = (hero) => {
    return axios.post("http://localhost:4000/superheros", hero);
  };
  return useMutation(addhero, {
    onSuccess: (comingdata) => {
      queryClinet.setQueryData("superhero-query", (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, comingdata.data],
        };
      });
    },
  });
};
