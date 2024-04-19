import { useContext, useState } from "react";
import { todoListContext } from "../context/TodoList";

const TodoForm = () => {
  const { todos, setTodos } = useContext(todoListContext);
  const [singleTodo, setSingleTodo] = useState({
    id: 1,
    title: "",
    status: "",
  });

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: singleTodo.id, // Use the current id
      title: title,
      status: status,
    };
    setTodos([...todos, newTodo]);
    setSingleTodo((prevTodo) => ({
      ...prevTodo,
      id: prevTodo.id + 1, // Increment the id for the next todo
    }));
    console.log;
    setTitle(""); // Clear the input fields after submission
    setStatus("");
  };

  return (
    <>
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div className="mb-3">
          <label className="form-label">Status</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default TodoForm;
