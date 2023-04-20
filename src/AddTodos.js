import {useState,useContext} from "react";
import AddContext from "./AddContext";
import { Modal } from "./Modal";
import "./styles.css";

const AddTodos = () =>{
    let [title,setTitle] = useState("");
    let [showModal,setShowModal] =useState(false);
    let [todo,setTodo] = useContext(AddContext);
    return(
        <div>
            <h1>~~~ ToDos List ~~~</h1>
            <br/>
        
            <label>
                <input className="todo-input" placeholder="Add a todo" name="text" type="text" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
            </label>
            <button className="todo-button" disabled={!title} onClick={()=>setShowModal(true)}> ADD </button>
            {showModal ? (
                <Modal>
                    <h1>You Wanted to add "{title}"</h1>
                    <button onClick={()=>{setTodo([...todo,title]); setTitle(""); setShowModal(false)}}>yes </button>
                    <button onClick={()=>setShowModal(false)}> No</button>
                </Modal>
            )
            : null    
            }
        </div>

    )
}
export default AddTodos;