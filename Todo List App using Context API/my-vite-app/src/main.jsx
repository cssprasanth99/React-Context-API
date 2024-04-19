import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodoListProvider } from "./context/TodoList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoListProvider>
    <App />
  </TodoListProvider>
);
