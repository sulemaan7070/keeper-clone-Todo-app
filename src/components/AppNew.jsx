import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBox from "@mui/icons-material/CheckBox";
function AppNew() {
  const [lineThrough, setLineThrough] = useState(false);
  const [text, setText] = useState({
    title: "",
    content: "",
    state: false,
  });
  const [notes, setNotes] = useState([]);
  const localItems = JSON.parse(localStorage.getItem("note"));
  //for input change
  function textChange(e) {
    let { name, value } = e.target;
    setText((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  }
  // for adding note to array
  function submitNote(e) {
    setNotes((prevNotes) => {
      return [...prevNotes, text];
    });
    console.log(notes);
    e.preventDefault();
    setText({
      title: "",
      content: "",
    });
  }
  // setting and getting the items from local storage
  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("note"));
    if (localNotes) {
      setNotes(localItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);
  // deleting

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  // for line through\

  function setLineThroughfun(index) {
    return true;
  }

  return (
    <>
      <Header />

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
      {/**the notes section goes here */}
      {notes.map((noteItem, index) => {
        return (
          <div
            className="note"
            key={index}
            style={{ textDecoration: lineThrough ? "line-through" : "none" }}
          >
            <>
              <input
                type="checkbox"
                name="mark as done"
                id={index}
                onClick={() => setLineThroughfun(index)}
              />
              <h1
                style={{
                  textDecoration:
                    setLineThroughfun && lineThrough ? "line-through" : "none",
                }}
              >
                {noteItem.title}
              </h1>
              <p
                style={{
                  textDecoration: lineThrough ? "line-through" : "none",
                }}
              >
                {noteItem.content}
              </p>
              <button onClick={() => deleteNote(index)}>
                <DeleteIcon sx={{ fontSize: 30 }} />
              </button>
            </>
          </div>
        );
      })}
      <Footer />
    </>
  );
}

export default AppNew;
