import { render } from "@testing-library/react";
import React, {useState} from "react";


function CategoryFilter({categories, selectedCategory}) {

  function handleClick(e) {
    console.log(e.target.innerHTML)
    // e.target.innerHTML === {category} ? className = "selected" : className = ""
  }

  const categoryButtons = categories.map((category) => {
    return (
      <button onClick={() => selectedCategory(category)} key={category}>{category}</button>
    )
  })

    
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
