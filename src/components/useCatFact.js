// cutom hook to get cat fact
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useCatfact = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
    isError,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      return res.data;
    });
  });

  const refetchData = () => {
    console.log("data refetched");
    refetch();
  };
  return { data, refetchData, isCatLoading, isError };
};
