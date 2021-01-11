import React, { Component } from "react";
import "./AddItem.css";
export default class AddItem extends Component {
  state = {
    label: "",
  };
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form className="addItem" onSubmit={this.onSubmit}>
        <input
          value={this.state.label}
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="write here"
        ></input>
        <button type="submit">Add new thing to do</button>
      </form>
    );
  }
}
