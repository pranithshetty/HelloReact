import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AppContext } from "../App";
import Axios from "axios";
export const Home = () => {
  const {
    data: catData,
    isLoading,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      return res.data;
    });
  });

  const { userName } = useContext(AppContext);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <h1>Home! {userName}</h1>
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Refectch data</button>
    </div>
  );
};
//Context api
//react qury usage
