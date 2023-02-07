import React from "react";
import "./OptionsWindow.css";

function OptionsWindow(props) {
  return (
    <div className="options-window-container">
      <div className="options-title header-font">Options:</div>
      <div
        className="option-direction hover"
        onClick={() => props.changeDirection()}
      >
        notes direction:
        {props.direction ? (
          <div className="up-direction">up</div>
        ) : (
          <div className="down-direction">down</div>
        )}
      </div>
      <div className="content-list">
      <div className="options-title header-font">Contents:</div>
        {props.notes.map((note) => {
          return (
            <a href={`#${note.noteTitle}`}><div className="content-title hover">- {note.noteTitle}</div></a>
          )
        })}
      </div>
    </div>
  );
}

export default OptionsWindow;
