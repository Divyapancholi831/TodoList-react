import {useState,useContext} from "react";
import AddContext from "./AddContext";
const AddTodos = () =>{
    let [title,setTitle] = useState("");
    let [todo,setTodo] = useContext(AddContext);
    return(
        <div>
            <h1>~~~ ToDos List ~~~</h1>
            <br/>
        
            <label>
                <input value = {title} onChange={(e)=>setTitle(e.target.value)}/>
            </label>
            <button onClick={()=>setTodo([...todo,title])}> ADD </button>
        </div>

    )
}
export default AddTodos;