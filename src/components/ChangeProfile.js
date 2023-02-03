import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
export const ChangeProfile = () => {
  const { setUserName } = useContext(AppContext);
  const [newUser, setnewUser] = useState("");
  return (
    <div>
      <input onChange={(e) => setnewUser(e.target.value)} />
      <button onClick={() => setUserName(newUser)}>Change userName</button>
    </div>
  );
};

//Context api
