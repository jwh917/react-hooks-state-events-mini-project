import React from "react";

export let tasksCategory = "All"

function CategoryFilter({listOfCategory, selectedCategories, filterCategories}) {
    // console.log(selectedCategories)
    // console.log(filterCategories)
    // console.log(listOfCategory)

  const categoryButtons = listOfCategory.map((category => <button key={category} className={selectedCategories === category ? "selected" : ""} onClick={filterCategories}>{category}</button>))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
