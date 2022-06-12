import React from "react";
import Task from "./Task";


function TaskList({listOfTasks}) {
 
  function makeTask(task){
    return <Task key={task.text} text={task.text} category={task.category}/>
  }

  let renderedList = []

  if(listOfTasks && listOfTasks.map ){
    renderedList = listOfTasks.map((task => makeTask(task)))
  }

  // const renderedList = listOfTasks.map((task => makeTask(task)))

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {renderedList}
    </div>
  );
}

export default TaskList;
