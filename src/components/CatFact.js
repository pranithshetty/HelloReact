import Axios from "axios";
import { useState, useEffect } from "react";
export const CatFact = () => {
  //   fetch("https://catfact.ninja/fact")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  const [catFact, setCatfact] = useState("");

  const fetchcatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatfact(res.data.fact);
    });
  };
  useEffect(() => {
    fetchcatFact();
  }, []);

  return (
    <div>
      <button onClick={fetchcatFact}>CAt Fact</button>
      <p>{catFact}</p>
    </div>
  );
};
