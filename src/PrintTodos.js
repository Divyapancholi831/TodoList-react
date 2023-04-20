import {useContext,useState,useRef} from "react";
import AddContext from "./AddContext";
import { Modal } from "./Modal";
import "./styles.css";

const PrintTOdos = () => {
    let [todo,setTodo] = useContext(AddContext);
    let [showModal,setShowModal] = useState(false);
    let [string,setString] = useState("");
    return(
        <div className="todo-app">
                {/* <table>
                    <tbody>
                    {todo.map((element,index)=>
                    <tr>
                        <td id={index}>{element}</td>
                        <td><button id={index} onClick={()=>{setShowModal(true);  setString(index)}}>Delete</button></td>
                    </tr>
                    )}
                    </tbody>
                </table> */}

                {
                    todo.map((element,index)=> 
                    <div className="output">
                        <div className="outputItem" id={index}>{element}</div>
                        <div className="todo-delete" id={index} onClick={()=>{setShowModal(true);  setString(index)}}><button>Delete</button></div>
                    </div>    
                    )
                }

                {showModal?(
                <Modal>
                    <h1>Are you sure?</h1>
                    <h2>Remove "{todo[string]}"</h2>
                    <button onClick={()=>{setShowModal(false); setTodo(todo.filter((item,id)=>id != string))}}> Yes </button>
                    <button onClick={()=>setShowModal(false)}> No </button>
                </Modal>
                ):null}
                
            
        </div>
    )
}
export default PrintTOdos;