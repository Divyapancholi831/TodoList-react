import { useContext, useState, useRef } from "react";
import AddContext from "./AddContext";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "./Modal";
import "./styles.css";
import { add_String_action, add_title_action, delete_todo_action } from "./redux/Action";

const PrintTOdos = () => {
  //   let [todo, setTodo] = useContext(AddContext);
  let [showModal, setShowModal] = useState(false);
  //let [string, setString] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((todolist) => todolist.Todos);
  const string = useSelector((todolist) => todolist.string);
  console.log("store", todos);
  return (
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

      {todos.map((element, index) => (
        <div className="output">
          <div className="outputItem" id={index}>
            <span onClick={() => {dispatch(add_title_action(element)); dispatch(add_String_action(index))}}>
              {element}
            </span>
          </div>
          <div className="todo-delete">
            <button
              id={index}
              onClick={() => {
                setShowModal(true);
                dispatch(add_String_action(index));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {showModal ? (
        <Modal>
          <div>
            <h1>Are you sure?</h1>
            <h2>Remove "{todos[string]}"</h2>
            <div className="buttons">
              <button
                onClick={() => {
                  setShowModal(false);
                  dispatch(delete_todo_action(string));
                  //   setTod(todos.filter((item, id) => id != string));
                }}
              >
                Yes
              </button>

              <button onClick={() => setShowModal(false)}> No </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};
export default PrintTOdos;
