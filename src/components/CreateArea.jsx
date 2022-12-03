import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

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
    onAdd(text);
    e.preventDefault();
    setText({
      title: "",
      content: "",
    });
  }
  return (
    <div>
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
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
