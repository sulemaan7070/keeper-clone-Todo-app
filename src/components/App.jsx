import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const uniqueNumber = new Date().getUTCMilliseconds();
  const localItems = JSON.parse(localStorage.getItem("note"));
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState({
    title: "",
    content: "",
    state: false,
  });

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("note"));
    if (localNotes) {
      setNotes(localItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
