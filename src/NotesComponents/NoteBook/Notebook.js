import React, {useState} from "react";
import './Notebook.css';
import AddWindow from '../AddWindow/AddWindow';
import Note from '../Note/Note';
import OptionsWindow from "../OptionsWindow/OptionsWindow";

import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';


const Notebook = () => {

  const [notes, setNotes] = useState([]);
  
  const [note, setNote] = useState('');

  const [notesDownDirection, setNotesDownDirection] = useState(true);
  const [contents, setContents] = useState([]);
  const [addOns, setAddOns] = useState(['note', 'photo', 'link']);
  const [activeAddOnWindow, setActiveAddOnWindow] = useState('');
  const [noteId, setNoteId] = useState(0);

  const addTodo = async (e) => {
    e.preventDefault();  
   
    try {
        const docRef = await addDoc(collection(db, "notes"), {
          note: note,    
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  function showAddInput(addOn) {
    setActiveAddOnWindow(addOn);
  }

  function closeAddWindow() {
    setActiveAddOnWindow('');
  }

  function addNote(content, title) {
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

  function deleteNote(index) {
    let filteredNotes = notes.filter((note, noteIndex) => note.noteId !== index);
    setNotes(filteredNotes);
  }

  function changeNotesDirection() {
    setNotesDownDirection(!notesDownDirection);
    setNotes(notes.reverse())
  }
  
  return (
    <div className="notebook-container">
      <div className="add-list-container header-font">
        <div className="notes-main-title"></div>
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
          addToFirebase = {addTodo}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className="notes-container">
        {notes.map((note) => {
          return (
            <Note 
            noteId = {note.noteId}
            title = {note.noteTitle}
            content = {note.noteContent}
            deleteNote = {deleteNote}
            />
          )
        })}
      </div>
      <OptionsWindow 
        direction = {notesDownDirection}
        changeDirection = {changeNotesDirection}
        notes = {notes}
      />
    </div>
  )
}

export default Notebook;