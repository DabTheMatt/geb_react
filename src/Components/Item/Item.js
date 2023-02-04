import React from "react";
import './item.css';

function Item(props) {
    return(
        <div className="list-container ">
        {! props.elName.checked ? 
        (<div className="item-container ">
            <div>{props.elName.name}</div>
            <input type="checkbox" onClick={() => props.handleChecked(props.elIndex)}></input>
            <button onClick={() => props.delProduct(props.elIndex)}>del</button>
        </div>) :
        (<div className="item-container checked">
            <div>{props.elName.name}</div>
            <input type="checkbox" onClick={() => props.handleChecked(props.elIndex)}></input>
            <button onClick={() => props.delProduct(props.elIndex)}>del</button>
        </div>)
    }
    </div>
    )
}

export default Item;
