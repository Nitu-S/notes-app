import React, { useState } from "react";
import plusIcon from "../../Asset/plusIcon.png";
import "./Sidebar.css";
function Sidebar(props) {
  const [listOpen, setListOpen] = useState(false);

  const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {color.map((color, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: color }}
            onClick={() => props.addNote(color)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
