import React, { Component } from "react";
import "./ListTitle.css";
class ListStatus extends Component {
  render() {
    const { todo, done } = this.props;
    return (
      <span className="listStatus">
        {todo} more to do, {done} done
      </span>
    );
  }
}
export default ListStatus;
