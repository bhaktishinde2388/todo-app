import "./Home.css"
import CheckIcon from "./icons/checklist.png"
function Home()
{
    return(
        <>
        <h1 className="heading"> todo list</h1>
        <div className="todo-container">
          
          <img className="check-icon" src={CheckIcon}/>
        </div>
        </>
    )
}
export default Home