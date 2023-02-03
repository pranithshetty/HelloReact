//react-redux demo

import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";
export const Login = () => {
  const [newUserName, setNewUserName] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);
  return (
    <div>
      <h1>Login!</h1>
      <input
        onChange={(e) => setNewUserName(e.target.value)}
        type="text"
        placeholder="username"
      />
      <button
        onClick={() => {
          dispatch(login({ username: newUserName }));
          console.log(username);
        }}
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Log-Out</button>
      {username}
    </div>
  );
};
