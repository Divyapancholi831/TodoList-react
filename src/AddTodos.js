import {useState} from "react";
const PrintTodos = ({setTodo}) =>{
    let [title,setTitle] = useState("");
    return(
        <div>
            <h1>~~~ ToDos List ~~~</h1>
            <br/>
        
            <label>
                <input value = {title} onChange={(e)=>setTitle(e.target.value)}/>
            </label>
            <button onClick={()=>setTodo((todo)=> [...todo,title])}> ADD{" "} </button>
        </div>

    )
}
export default PrintTodos;