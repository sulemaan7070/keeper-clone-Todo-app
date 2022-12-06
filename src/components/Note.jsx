import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const localItems = JSON.parse(localStorage.getItem(props.id));
  const [lineThrough, setLineThrough] = useState(false);
  // const [lineThroughItems, setLineThroughItems] = useState(localItems);
  useEffect(() => {
    const localLineThrough = JSON.parse(localStorage.getItem(props.id));
    if (localLineThrough) {
      setLineThrough(localLineThrough);
    }
  }, []);

  function handleClick() {
    props.onDelete(props.id);
    localStorage.removeItem(props.id);
  }
  function handleLineThrough(e) {
    // setLineThrough(e.target.checked);
    setLineThrough((prev) => !prev);
  }

  useEffect(() => {
    localStorage.setItem(props.id, JSON.stringify(lineThrough));
    // console.log(lineThrough);
  }, [lineThrough]);
  return (
    <div
      className="note"
      style={{
        textDecoration: lineThrough ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        name="mark as done"
        onChange={handleLineThrough}
        checked={lineThrough}
      />
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* <button onClick={handleEdit}>edit</button> */}
      <button onClick={handleClick}>
        {" "}
        <DeleteIcon sx={{ fontSize: 30 }} />{" "}
      </button>
    </div>
  );
}

export default Note;
