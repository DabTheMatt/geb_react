import React, { useState } from 'react';
import './App.css';
import Item from './Components/Item/Item';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [products, setProducts] = useState([]);
  

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function addProduct() {
    const newProduct = {
      name: inputValue,
      checked: false
    };

    const tempProducts = [...products, newProduct];
    setProducts(tempProducts);
    setInputValue('');
  }

  function delProduct(index) {
    console.log(index);
    let tempProducts = [...products];
    let newArray = tempProducts.filter((element, elementIndex) => elementIndex != index);
    setProducts(newArray);
  }

  function handleChecked(index) {
    const tempProducts = [...products];
    tempProducts[index].checked = !tempProducts[index].checked;
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

                  <Item 
                  elName = {element}
                  elIndex = {index}
                  delProduct = {delProduct}
                  handleChecked = {handleChecked}
                  />
                
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
//some comment