//using custom hooks for fetching data

import { useCatfact } from "./useCatFact";

export const CatFactCustHook = () => {
  const { data, isCatLoading, refetchData, isError } = useCatfact();
  if (isCatLoading) return <h1>Loading...</h1>;
  if (isError) {
    return <h1>Ooops! There seems to be an error !</h1>;
  }
  return (
    <div>
      <button onClick={refetchData}>Refetch Fact</button>
      <p>{data?.fact}</p>
    </div>
  );
};
