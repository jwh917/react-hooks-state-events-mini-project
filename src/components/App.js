import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectCategories, SetSelectCategories] = useState("All")
  const [newTaskList, setNewTaskList] = useState(TASKS)
  const [formInput, setFormInput] = useState("")
  const [categorySection, setCategorySection] = useState("Code")

  function filterCategories(event){
    // console.log(event.target.innerHTML)
    // event.currentTarget.classList.toggle('selected');
    SetSelectCategories(event.target.innerHTML)
  }

  // handleInput onChange={handleInput} 
  function handleInput(event){
    // console.log(event.target.value)
    setFormInput(event.target.value)
  
  }

  // handleCategoryChange onChange={handleCategoryChange}
  function handleCategoryChange(event){
    // console.log(event.target.value)
    setCategorySection(event.target.value)
  
  }

  // handleSubmit onSubmit={handleSubmit}
  function onTaskFormSubmit(event){
    event.preventDefault()

    const newTask = {
      text: formInput,
      category: categorySection
    }

    // console.log(formInput, categorySection)
    // console.log(newTask)
    // console.log(newTaskList)
    setNewTaskList([...newTaskList, newTask])

  }
  // console.log(newTaskList)



  const displayedList = newTaskList.filter((task => {
    if(selectCategories === "All"){
      // console.log(task)
      return task
    }
    else if(task.category === selectCategories) {
      // console.log(task)
      return task
    }
  }))  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter listOfCategory={CATEGORIES} selectedCategories={selectCategories} filterCategories={filterCategories}/>
      <NewTaskForm listOfCategory={CATEGORIES} handleInput={handleInput} handleCategoryChange={handleCategoryChange} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList listOfTasks={displayedList} />
    </div>
  );
}

export default App;
