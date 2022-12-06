import React, { useState } from "react";
import { AlertTitle, Alert } from "@mui/material";
import { Button } from "@mui/material";

function CreateArea({ onAdd }) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });
  const [show, setShow] = useState(false);

  function textChange(e) {
    let { name, value } = e.target;
    setText((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  }
  function submitNote(e) {
    e.preventDefault();
    // if ((text.title == "" || text.content == "") && show) {
    //   const timer = setTimeout(() => {
    //     alert("Please enter both title and content");
    //   }, 100);
    //   setInterval(() => {
    //     clearTimeout(timer);
    //     setShow(true);
    //   }, 500);
    // } else {
    onAdd(text);
    //   setText({
    //     title: "",
    //     content: "",
    //   });
    // }
  }
  return (
    <div>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        <h3>please enter both title and content</h3>{" "}
        <Button className="warning" variant="outlined">
          OK
        </Button>
      </Alert>
      <form>
        <input
          onChange={textChange}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          name="content"
          onChange={textChange}
          placeholder="Take a note..."
          rows="3"
          value={text.content}
        />
        <button
          onClick={submitNote}
          // disabled={text.title == "" || text.content == ""}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
