import React from "react";
import { categoriesList } from "../items-list";

export default function Categories(props) {
  return (
    <div className="categories">
      {categoriesList.map((el) => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
