import "./Home.css"
import CheckIcon from "./icons/checklist.png"
import ToDoCards from "../../components/ToDoCards/ToDoCards"
import { useState } from "react"
import toast, { Toaster} from 'react-hot-toast';

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
    const [newTask,setNewTask] = useState([])
    return(
        
        <div>



        <h1 className="heading"> Todo list</h1>

       <div className="to-do-main-container">
          <div className="todo-list-container">
            {
                 // myList.map((todoItem , i)=>{
                //    return(
                //         <div key={i}>{todoItem}</div>
                //     )
                // }) 
                todoList.map((todoItem, i)=><ToDoCards key={i} todoItem={todoItem}/>)}
               

                {
                    todoList.length === 0
                    ?
                    <span className="empty-task-container-text">
                    There is no task added.........<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    .......🙄😪........<br></br>
                    please add some task🤠🤠
                    </span>
                    :null
                }
            
             <div>   <img className="check-icon" src={CheckIcon}/>   </div>
           </div>
         

          </div>
       

        <div className="add-task-container">
            <input type="text"
             className="add-input-box"
             placeholder="add new task"
             onChange={(b)=>setNewTask(b.target.value)}
             value={newTask}
             />
            <button type="button"
             className="add-btn"
             onClick={()=>{
                 if(newTask == ""){
                    toast.error("task can't add");
                 }


                setTodoList([ ...todoList,newTask  ])
                setNewTask("")
                toast.success("work submitted")
             }}
             
             >Add</button>
        </div>


<Toaster/>
        </div>
        
    )
}
export default Home