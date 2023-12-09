import React from "react";
import "./Note.css";
import deleteIcon from "../../Asset/deleteIcon.png";

let timer = 500,
  timeout;
function Note(props) {
  // {
  //   text: "iodiw";
  //   time: "2:12 am";
  //   color: "red";
  // }
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Sepetember",
      "October",
      "November",
      "December",
    ];
    let hrs = date.getHours();
    let ampm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    const month = monthName[date.getMonth()];

    return `${hrs}:${min} ${ampm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        placeholder={"Write your note here..."}
        defaultValue={props.note.text}
        onChange={(event) => {
          updateText(event.target.value, props.note.id);
        }}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="delete"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
