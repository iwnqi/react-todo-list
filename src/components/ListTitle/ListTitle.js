import React from "react";
import ListStatus from "./ListStatus";
import "./ListTitle.css";
const ListTitle = ({ todo, done }) => {
  const statusInfo = {
    todo,
    done,
  };
  return (
    <div className="todoListHeader">
      <h1>Todo list</h1>
      <ListStatus {...statusInfo} />
    </div>
  );
};
export default ListTitle;
