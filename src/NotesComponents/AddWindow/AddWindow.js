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
        <div className='add-window header-font'>
            <div className='add-window-header'>
                <p className='add-window-title'></p>
                <div className='colse-add-window-x hover' onClick={() => props.closeWindow()}>close</div>
            </div>
            
            
            <div className='add-form'>
                <label>title</label>
                <input type="text" id='add-note-title' value={titleValue} onChange={(value) => handleTitle(value)} autoFocus></input>
                <label>note</label>
                <textarea id='add-note-textarea' className='text-font' name='textarea' rows="12" cols='35' value={textAreaValue} onChange={(value) => handleTextArea(value)}></textarea>
                <button type='submit' className='add-content header-font hover' onClick={() => {props.addNote(textAreaValue, titleValue); props.closeWindow()}} >add note</button>
            </div>
        </div>
    )
}

export default AddWindow;