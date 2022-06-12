import React, { useState } from "react";

function NewTaskForm({listOfCategory,handleInput, handleCategoryChange, onTaskFormSubmit}) {
  
  // console.log(listOfCategory)
  // const [formInput, setFormInput] = useState("")
  // const [categorySection, setCategorySection] = useState("Code")

  // const [] = useState()

  const noAllCategories = listOfCategory.slice(1)

  // const noAllCategories = [... listOfCategory.slice(1)]

  // console.log(noAllCategories)


  const selectList = noAllCategories.map((category) => <option key={category} value={category}>{category}</option>)

  // // handleInput onChange={handleInput} 
  // function handleInput(event){
  //   console.log(event.target.value)
  //   setFormInput(event.target.value)

  // }

  // // handleCategoryChange onChange={handleCategoryChange}
  // function handleCategoryChange(event){
  //   console.log(event.target.value)
  //   setCategorySection(event.target.value)

  // }

  // // handleSubmit onSubmit={handleSubmit}
  // function handleSubmit(event){
  //   event.preventDefault()
  //   console.log(formInput, categorySection)
  // }


  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInput}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {selectList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
