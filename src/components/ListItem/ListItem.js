import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleDone,
      onToggleImportant,
      important,
      done,
    } = this.props;
    let classNames = "listItem";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="listItemLabel" onClick={onToggleDone}>
          {label}
        </span>
        <div>
          <button onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>
          <button onClick={onToggleImportant}>
            <i className="fa fa-exclamation"></i>
          </button>
        </div>
      </span>
    );
  }
}

export default ListItem;
