import React from "react";
import { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";

export const TodoList = ({ todos, setTodos }) => {
  console.log("todos:", todos);
  console.log(setTodos);

  return (
    <div>
      <table>
        <thead>
          <th>Title</th>
          <th>Status</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {todos.map((user) => (
            <TodoItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
