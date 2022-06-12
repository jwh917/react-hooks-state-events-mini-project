import React, { useState } from "react";

function Task({text, category}) {
  // console.log(text)
  // console.log(category)
  const [isDelete, setIsDelete] = useState(false)

  function deleteTask(){
    setIsDelete(true)
  }

  // delete button might need filter instead

  return (
    isDelete ? "" : (<div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>)
  );
}

export default Task;
