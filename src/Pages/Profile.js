import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "../components/ChangeProfile";
export const Profile = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      Profile! {userName}
      <ChangeProfile />
    </div>
  );
};
//Context api
