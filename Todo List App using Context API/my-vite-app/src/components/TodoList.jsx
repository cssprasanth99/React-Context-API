import React, { useContext } from "react";
import { todoListContext } from "../context/TodoList";

const TodoList = () => {
  const { todos, setTodos } = useContext(todoListContext);

  const handleDelete = (id) => {
    let updatedTodo = todos.filter((task) => task.id !== id);
    setTodos(updatedTodo);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
