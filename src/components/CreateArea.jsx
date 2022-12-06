import React, { useState } from "react";
import { AlertTitle, Alert } from "@mui/material";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

function CreateArea({ onAdd }) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });
  const [warning, setWarning] = useState(false);

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
    if (text.content == "" && text.title == "" && !warning) {
      setWarning(true);
    } else {
      onAdd(text);
      setText({
        title: "",
        content: "",
      });
    }
  }
  return (
    <div>
      {warning && (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          <h3>please enter both title and content</h3>{" "}
          <Button
            className="warning"
            variant="outlined"
            onClick={() => setWarning(false)}
          >
            OK
          </Button>
        </Alert>
      )}

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
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={submitNote}
        >
          Add
        </motion.button>
      </form>
    </div>
  );
}

export default CreateArea;
