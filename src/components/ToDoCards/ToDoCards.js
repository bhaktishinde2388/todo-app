import React from 'react'
import "./../ToDoCards/ToDoCards.css"

function ToDoCards({todoItem}) {
  return (
    <>
    <div className="todo-card">
    {todoItem}
    </div>
    </>
  )
}

export default ToDoCards