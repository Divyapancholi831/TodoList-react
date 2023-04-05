import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import AddTodos from "./AddTodos";
import PrintTodos from './PrintTodos';
import "./styles.css";
function App() {
  let [todo,setTodo] = useState(["todo1"]) ;
  return (
    <div className="App">
      <AddTodos setTodo = {setTodo}/>
      <PrintTodos todo={todo}/>
    </div>
  );
}

export default App;
