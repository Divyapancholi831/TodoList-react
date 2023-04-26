import { useState, useContext } from "react";
import AddContext from "./AddContext";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "./Modal";
import "./styles.css";
import {
  Add_todo,
  Add_todo_action,
  add_title_action,
  update_todo_action,
} from "./redux/Action";
import { update_todo } from "./redux/ActionType";

const AddTodos = () => {
  const dispatch = useDispatch();

  let [showModal, setShowModal] = useState(false);
  const todos = useSelector((todoList) => todoList.Todos);
  const title = useSelector((state) => state.title);
  // let [todo, setTodo] = useContext(AddContext);
  const string = useSelector((todolist) => todolist.string);
  console.log("store", todos);

  return (
    <div>
      <h1>~~~ ToDos List ~~~</h1>
      <br />

      <label>
        <input
          className="todo-input"
          placeholder="Add a todo"
          name="text"
          type="text"
          value={title}
          onChange={(e) => dispatch(add_title_action(e.target.value))}
        />
      </label>
      <button
        className="todo-button"
        disabled={!title}
        onClick={() => setShowModal(true)}
      >
        {string ? "UPDATE" : "ADD"}
      </button>
      {showModal ? (
        <Modal>
          <div>
            <h1>You Wanted to add "{title}"</h1>
            <div className="buttons">
              <button
                onClick={() => {
                  string
                    ? dispatch(update_todo_action(title))
                    : dispatch(Add_todo_action(title));
                  dispatch(add_title_action(""));
                  setShowModal(false);
                }}
              >
                yes
              </button>
              <button onClick={() => setShowModal(false)}> No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};
export default AddTodos;
