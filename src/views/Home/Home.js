import "./Home.css"
import CheckIcon from "./icons/checklist.png"
import ToDoCards from "../../components/ToDoCards/ToDoCards"
import {useState } from "react"
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

    const [todoList,setTodoList] =useState([
       
    ])
    const [newTask,setNewTask] = useState("")
    const [category,setCategory] = useState("")


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
                todoList.map((todoItem, i)=>{
                    const {task,category} = todoItem
                    return   <ToDoCards key={i} task={task} category={category}/>})}               

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
             value={newTask}
             onChange={(e)=>setNewTask(e.target.value)}
            
             />
             <select className="task-category-options"
             value={category}
                     onChange={(e)=>setCategory(e.target.value)}
             >
                <option value="study">study </option>
                <option value="cooking">cooking:"👩‍🍳"</option>
                <option value="shooping"> shooping:"🛍"</option>
                <option value="health">health:"🩺👩‍🔬"</option>
                <option value="farmwork">farmWork:"👩‍🌾"</option>
             </select>


            <button type="button"
            alt="add"
             className="add-btn"
             onClick={()=>{
                 if(newTask === ""){
                    toast.error("task can't add");
                    return
                 }


                setTodoList([ ...todoList,{task:newTask,category:category}])
                setNewTask("")
                setCategory("")
                toast.success("work submitted")
             }}
             
             >Add</button>
        </div>


<Toaster/>
        </div>
        
    )
}
export default Home