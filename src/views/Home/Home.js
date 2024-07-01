import "./Home.css"
import CheckIcon from "./icons/checklist.png"
import ToDoCards from "../../components/ToDoCards/ToDoCards"

function Home()
{
    const myList = [
        "Goto to Market",
       "fill the bootle",
       "complete the assignment",
       "Goto to Market",
       "fill the bootle",
       "complete the assignment",
       "Goto to Market",
       "fill the bootle",
       "complete the assignment",
        
    ]
    return(
        
        <div>



        <h1 className="heading"> todo list</h1>

       <div className="to-do-main-container">
          <div className="todo-list-container">
            {
                myList.map((todoItem, i)=><ToDoCards key={i} todoItem={todoItem}/>)
                // myList.map((todoItem , i)=>{
                //    return(
                //         <div key={i}>{todoItem}</div>
                //     )
                // }) 
            }
             <div>   <img className="check-icon" src={CheckIcon} />   </div>
           </div>

           

          </div>
       

        <div>
            <input type="text" value={""}/>
        </div>



        </div>
        
    )
}
export default Home