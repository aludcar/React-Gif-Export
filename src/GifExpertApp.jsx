import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setcategories] = useState(["Vegeta"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories((categories) => [newCategory, ...categories]); //Spread operators
    // Crea una desestructuracion del array  para crear uno nuevo
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
