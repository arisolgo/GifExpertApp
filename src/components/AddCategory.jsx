import { useState } from "react";
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
    console.log(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for Gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
