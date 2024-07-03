import React from 'react'
import "./../ToDoCards/ToDoCards.css"
import DeleteIcon from "./../../views/Home/icons/delete.png"

function ToDoCards({index,task,category,deleteTask}) {

  const CategoryImogi = {
    study :"✍",
    cooking:"👩‍🍳",
    shooping:"🛍",
    health:"🩺👩‍🔬",
    farmwork:"👩‍🌾"

  }

  const CategoryColor={
    study :"orange",
    cooking:"yellow",
    shooping:"pink",
    health:"skyblue",
    farmwork:"green",
  }
  return (
    
    <div className="todo-card">
      <img
      src={DeleteIcon}
      className='delete-icon'
      alt='Delete'
      onClick={()=>{
        deleteTask(index)
      }}/>


    <span>{task}</span>
    <h1 className='category' style={{backgroundColor:CategoryColor[category]}}>
               {CategoryImogi[category]} {category}</h1>
    </div>
   
  )
}

export default ToDoCards