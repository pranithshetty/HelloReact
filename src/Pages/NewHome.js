import { useSelector } from "react-redux";

export const NewHome = () => {
  const username = useSelector((state) => state.user.value.username);
  return (
    <div>
      <h1>Home!</h1>
      {username ? <h2>welcome {username}</h2> : <h2>Login!</h2>}
    </div>
  );
};
