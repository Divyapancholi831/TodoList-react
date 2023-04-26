import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddTodos from "./AddTodos";
import PrintTodos from "./PrintTodos";
import "./styles.css";
import AddContext from "./AddContext";
import { useSelector } from "react-redux";
function App() {
  let [todo, setTodo] = useState(["todo1"]);
  const tod01 = useSelector((store) => store.Todos);
  console.log("useSelector", tod01);
  return (
    <div className="App">
      <AddContext.Provider value={[todo, setTodo]}>
        <AddTodos />
        <PrintTodos />
      </AddContext.Provider>
    </div>
  );
}

export default App;
