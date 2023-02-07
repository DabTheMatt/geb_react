import React from "react";
import './Note.css';

function Note(props) {

function printDate() {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    return (year + "-" + month + "-" + day);
}

function countLetters() {
    let tempString = props.content.replace(/ /g, "");
    return tempString.length;
}

function countWords() {
    let tempArray = props.content.split(" ");
    return tempArray.length;
}
    return (
        <div className="note-container">
            <div className="note-life-line">
                <div className="life-line-info">{printDate()}</div>
            </div>
            <div className="note-body">
                <div className="note-header-container">
                    <div id={props.title} className="note-title header-font">{props.title}<span className="word-count">{countWords()} words / {countLetters()} letters</span></div>
                    <div className="note-options">
                        <div className="note-delete-button hover header-font" onClick={()=>props.deleteNote(props.noteId)}>delete</div>
                    </div>
                </div>
                
                <div className="note-content">{props.content}</div>
            </div>


            
        </div>
    )
}

export default Note;