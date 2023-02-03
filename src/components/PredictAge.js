//useEffect
import { useState, useEffect } from "react";
import Axios from "axios";
export const PredictAge = () => {
  const [predictedAge, setpredictedAge] = useState(null);
  const [personName, setPersonName] = useState("");
  const fetchAge = (personName) => {
    Axios.get(`https://api.agify.io?name=${personName}`).then((res) => {
      console.log(res.data);
      setpredictedAge(res.data);
    });
  };
  //   useEffect(() => {
  //     fetchAge();
  //   }, []);

  return (
    <div>
      <input
        placeholder="name"
        onChange={(e) => setPersonName(e.target.value)}
      />
      <button onClick={() => fetchAge(personName)}>Fetch Age</button>
      <h1>predicted Age:{predictedAge?.age}</h1>{" "}
      {/*  predictedAge?.age if predictedAge is not null render /> */}
    </div>
  );
};
