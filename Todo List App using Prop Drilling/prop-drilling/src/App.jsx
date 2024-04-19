import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoForm } from "./assets/components/TodoForm";

function App() {
  let [todos, setTodos] = useState([]);

  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
