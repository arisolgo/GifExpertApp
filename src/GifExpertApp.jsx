import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  const addCategory = (category) => {
    setCategories([...categories, category]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={addCategory}
        // addCategory={setCategories}
      />
      <button onClick={addCategory}>Add Category</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
