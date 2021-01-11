import React from "react";
import "./SearchPanel.css";
const SearchPanel = ({ onSearch, onFilter }) => {
  return (
    <div className="searchPanel">
      <input type="text" onChange={onSearch} placeholder="search"></input>
      <div className="searchPanelBtns">
        <button
          className="active"
          data-event="all"
          onClick={onFilter}
          id="allFilter"
        >
          All
        </button>
        <button data-event="active" onClick={onFilter} id="activeFilter">
          Active
        </button>
        <button data-event="done" onClick={onFilter} id="doneFilter">
          Done
        </button>
      </div>
    </div>
  );
};
export default SearchPanel;
