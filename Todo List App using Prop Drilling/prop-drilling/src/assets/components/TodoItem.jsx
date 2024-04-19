import React from "react";
import PropTypes from "prop-types";

export const TodoItem = ({ user }) => {
  console.log(user);
  return (
    <tr>
      <td>{user.title}</td>
      <td>{user.status}</td>
      <td>
        <button className="btn btn-primary">Delete</button>
      </td>
    </tr>
  );
};
