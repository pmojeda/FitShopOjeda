import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App =() => {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la Tienda"/>
      <ItemDetailContainer/>
    </>
  )
}

export default App;
