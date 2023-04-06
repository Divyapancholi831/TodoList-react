import {useContext} from "react";
import AddContext from "./AddContext";
const PrintTOdos = () => {
    let [todo,setTodo] = useContext(AddContext);
    return(
        <div>
                <table>
                    <tbody>
                    {todo.map((todo)=>
                    <tr>
                        <td>{todo}</td>
                        <td><button>Delete</button></td>
                    </tr>
                    )}
                    </tbody>
                </table>
            
        </div>
    )
}
export default PrintTOdos;