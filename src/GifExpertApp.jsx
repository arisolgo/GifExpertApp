import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { capitalize } from "./utils/commonFunctions";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const addCategory = (category) => {
    const newCategory = capitalize(category);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={addCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
