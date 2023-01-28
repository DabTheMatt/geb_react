import React, { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [products, setProducts] = useState([]);
  

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function addProduct(value) {
    const newProduct = {
      name: inputValue,
      deleted: false
    };

    const tempProducts = [...products, newProduct];
    setProducts(tempProducts);
    setInputValue('');
  }

  function handleDelete(index) {
    const tempProducts = [...products];
    console.log(tempProducts);

    tempProducts[index].deleted = !tempProducts[index].deleted;
    setProducts(tempProducts);
  }

  return (
    <div className="main-container">
      <div className="title title-font">Shopping <span className="accent">list</span></div>
      <div className="form-container">
        <input value={inputValue} onChange={(value) => handleChange(value)} type="text"></input>
        <button onClick={() => addProduct()}>Add</button>
      </div>
      <div className="list-container">
        {products.map((element, index) => {
          return(
            <div key={index} className='element-container'>
              {!element.deleted ?
                (
                  <div key={index} className="list-element">
                    <div className="element-name undeleted">{element.name}</div>
                    <input value={element.deleted} onChange={() => handleDelete(index)} type="checkbox"></input>
                  </div>
                ) : 
                (
                  <div key={index} className="list-element">
                    <div className="element-name deleted">{element.name}</div>
                    <input value={element.deleted} onChange={() => handleDelete(index)} type="checkbox"></input>
                  </div>
                )
              }
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
