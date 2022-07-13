import React, { useState } from "react";
import { categoriesList } from "../items-list";

export default function Categories(props) {
  const [categories, setCategory] = useState(categoriesList);
  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
