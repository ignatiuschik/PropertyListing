import AddProperty from './AddProperty';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import React, { useState } from 'react'

function App() {

const [propertyName, setPropertyName] = useState(JSON.parse(localStorage.getItem('LocalProperties')));

const [newProperty, setNewProperty] = useState('');

const handleCheck = (id) => {
    const myPropertyList = propertyName.map((item) => item.id ===id ? {...item,checked:!item.checked}: item);
    SaveToJSON(myPropertyList);
}

const handleDelete = (id) => {
    const myPropertyList = propertyName.filter((item) => item.id !== id);
    SaveToJSON(myPropertyList);
}

const handlePropertyAddition = (e) => {
  e.preventDefault();
  if(!newProperty) return;
  additionalProperty(newProperty);
  setNewProperty('');
}

const additionalProperty = (description) => {
  const id = propertyName.length ? propertyName[propertyName.length - 1].id + 1 : 1;
  const myNewProperty = {id,checked: false,description};
  const myPropertyList = [...propertyName , myNewProperty]
  SaveToJSON(myPropertyList);
}

const SaveToJSON = (properties) => {
  setPropertyName(properties);
  localStorage.setItem('LocalProperties',JSON.stringify(properties));
}

  return (
    <div className="App">
      <Header />
      <AddProperty
        newProperty = {newProperty}
        setNewProperty = {setNewProperty}
        handlePropertyAddition = {handlePropertyAddition}
      />
      <Content 
        propertyName = {propertyName}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
