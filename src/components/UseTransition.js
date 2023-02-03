import { useState, useTransition } from "react";
import NAMES from "./MOCK_DATA.json";

export const UseTransition = () => {
  const [searchItem, setSearchItem] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const changeHandler = (e) => {
    setInputValue(e.target.value);
    startTransition(() => setSearchItem(e.target.value));
  };
  const filteredNames = NAMES.filter((item) => {
    return (
      item.first_name.toLowerCase().includes(searchItem) ||
      item.last_name.toLowerCase().includes(searchItem)
    );
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Search name"
        value={inputValue}
        onChange={changeHandler}
      />
      {isPending && <p>Updating List...</p>}
      {filteredNames.map((item) => {
        return (
          <p key={item.id}>
            {item.first_name} {item.last_name}
          </p>
        );
      })}
    </div>
  );
};
