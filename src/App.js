import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import AddTodos from "./AddTodos";
import PrintTodos from './PrintTodos';
import "./styles.css";
import AddContext from './AddContext';
function App() {
  let [todo,setTodo] = useState(["todo1"]) ;
  return (
    <div className="App">
      <AddContext.Provider value={[todo,setTodo]}>
      <AddTodos/>
      <PrintTodos/>
      </AddContext.Provider>
    </div>
  );
}

export default App;
