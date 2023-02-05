import React, {useState} from 'react';
import './AddWindow.css';

function AddWindow(props) {
    const [titleValue, setTitleValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');

    function handleTitle(textarea) {
        setTitleValue(textarea.target.value)
    }

    function handleTextArea(textarea) {
        setTextAreaValue(textarea.target.value)
    }

    return (
        <div className='add-window'>
            <div className='add-window-header'>
                <p>add {props.type}</p>
                <div className='colse-add-window-x' onClick={() => props.closeWindow()}>close</div>
            </div>
            
            
            <div className='add-form'>
                <input type="text" id='add-note-title' value={titleValue} onChange={(value) => handleTitle(value)}></input>
                <textarea id='add-note-textarea' name='textarea' rows="5" cols='35' value={textAreaValue} onChange={(value) => handleTextArea(value)}></textarea>
                <button type='submit' className='add-content' onClick={() => {props.addNote(textAreaValue, titleValue); props.closeWindow()}} >add</button>
            </div>
        </div>
    )
}

export default AddWindow;