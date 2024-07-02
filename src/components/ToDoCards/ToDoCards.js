import React from 'react'
import "./../ToDoCards/ToDoCards.css"

function ToDoCards({task,category}) {

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
    <span>{task}</span>
    <h1 className='category' style={{backgroundColor:CategoryColor[category]}}>
               {CategoryImogi[category]} {category}</h1>
    </div>
   
  )
}

export default ToDoCards