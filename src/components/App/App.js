import React, { Component } from "react";
import SearchPanel from "../SearchPanel";
import ListTitle from "../ListTitle";
import TodoList from "../TodoList";
import AddItem from "../AddItem";
import "./App.css";
export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [this.newTodo("Do bad thing"), this.newTodo("Do good thing")],
    term: "",
    filter: "all", //all,active,done
  };

  newTodo(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }
  deleteId = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const fixedTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: fixedTodoData,
      };
    });
  };
  search = (arr, term) => {
    if (term.length === 0) return arr;
    return arr.filter((el) => el.label.toLowerCase().indexOf(term) > -1);
  };

  onSearchChange = (e) => {
    this.setState(() => {
      const value = e.target.value.toLowerCase();

      return {
        term: value,
      };
    });
  };
  addTodo = (text) => {
    this.setState(({ todoData }) => {
      const newItem = this.newTodo(text);
      const expandedTodoData = [...todoData, newItem];
      return {
        todoData: expandedTodoData,
      };
    });
  };
  toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };
  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, "done"),
      };
    });
  };
  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, "important"),
      };
    });
  };
  filter = (arr, filter) => {
    switch (filter) {
      case "all":
        return arr;
      case "active":
        return arr.filter((el) => !el.done);
      case "done":
        return arr.filter((el) => el.done);
    }
  };
  onFilter = (e) => {
    const allBtn = document.getElementById("allFilter");
    const activeBtn = document.getElementById("activeFilter");
    const doneBtn = document.getElementById("doneFilter");
    const filterBtns = [allBtn, activeBtn, doneBtn];
    filterBtns.map((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    this.setState(() => {
      const filter = e.target.dataset.event;
      return {
        filter,
      };
    });
  };

  render() {
    const { todoData, term, filter } = this.state;
    const visibleData = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todoContainer">
        <div className="mainTodoList">
          <ListTitle done={doneCount} todo={todoCount} />
          <SearchPanel
            onFilter={this.onFilter}
            onSearch={this.onSearchChange}
          />
          <TodoList
            todoData={visibleData}
            onDelete={this.deleteId}
            onToggleDone={this.toggleDone}
            onToggleImportant={this.toggleImportant}
          />
          <AddItem onAdd={this.addTodo} />
        </div>
      </div>
    );
  }
}
