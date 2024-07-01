import "./Home.css"
import CheckIcon from "./icons/checklist.png"
import ToDoCards from "../../components/ToDoCards/ToDoCards"
import { useState } from "react"

function Home()
{
    // const todoList = [
    //     "Goto to Market",
    //    "fill the bootle",
    //    "complete the assignment",
    //    "Goto to Market",
    //    "fill the bootle",
    //    "complete the assignment",
    //    "Goto to Market",
    //    "fill the bootle",
    //    "complete the assignment",
    //    "complete the assignment",
    //    "Goto to Market",
    //    "fill the bootle",
    //    "complete the assignment",
        
    // ]

    const [todoList,setTodoList] =useState([])
    return(
        
        <div>



        <h1 className="heading"> todo list</h1>

       <div className="to-do-main-container">
          <div className="todo-list-container">
            {
                todoList.map((todoItem, i)=><ToDoCards key={i} todoItem={todoItem}/>)
                // myList.map((todoItem , i)=>{
                //    return(
                //         <div key={i}>{todoItem}</div>
                //     )
                // }) 
            }
             <div>   <img className="check-icon" src={CheckIcon}/>   </div>
           </div>

           

          </div>
       

        <div className="add-task-container">
            <input type="text"
             className="add-input-box"
             placeholder="add"
             />
            <button type="button" className="add-btn">Add</button>
        </div>



        </div>
        
    )
}
export default Home