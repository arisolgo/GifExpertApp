import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { capitalize } from "./utils/commonFunctions";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const addCategory = (category) => {
    const newCategory = capitalize(category);
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={addCategory} />
      <button onClick={addCategory}>Add Category</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
