import { createContext, useState } from "react";

const todoListContext = createContext();

const TodoListProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <todoListContext.Provider value={{ todos, setTodos }}>
      {children}
    </todoListContext.Provider>
  );
};

export { TodoListProvider, todoListContext };
