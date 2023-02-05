import React, {useState} from "react";
import './Notebook.css';
import AddWindow from '../AddWindow/AddWindow';
import Note from '../Note/Note';

function Notebook() {

  const [notes, setNotes] = useState([]);
  const [addOns, setAddOns] = useState(['note', 'photo', 'link']);
  const [activeAddOnWindow, setActiveAddOnWindow] = useState('');
  const [noteId, setNoteId] = useState(1);

  function showAddInput(addOn) {
    setActiveAddOnWindow(addOn);
  }

  function closeAddWindow() {
    setActiveAddOnWindow('');
  }

  function addNote(content, title) {
    console.log('add', content)
    const newNote = {
      noteId: noteId,
      noteTitle: title,
      noteContent: content
    }

    let tempNotes = [...notes, newNote];
    console.log(tempNotes);
    setNotes(tempNotes);
    setNoteId(noteId + 1);
  }
  
  return (
    <div className="notebook-container">
      notebook
      <div className="add-list-container">
        <ul className="add-list">
          {addOns.map((addOn, index) => {
              return (
                <li key={index} className="add-element" onClick={() => showAddInput(addOn)}>+ {addOn}</li>
              )
            })
          }
        </ul>
        <hr className="under-add-list-line"></hr>
        {activeAddOnWindow ? (
          <AddWindow 
          type={activeAddOnWindow}
          closeWindow = {closeAddWindow}
          addNote = {addNote}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className="notes-container">
        {notes.map((note) => {
          return (
            <Note 
            id = {note.noteId}
            title = {note.noteTitle}
            content = {note.noteContent}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Notebook;