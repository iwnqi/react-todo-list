import React from "react";
import ListItem from "../ListItem";

const TodoList = ({ todoData, onDelete, onToggleDone, onToggleImportant }) => {
  const listItems = todoData.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item todoListItem" key={id}>
        <ListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });
  return <ul className="list-group todoList">{listItems}</ul>;
};
export default TodoList;
