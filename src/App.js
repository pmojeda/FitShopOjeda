import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Cart} from './components/Cart';
import {Error} from './components/Error';
import CartProvider from './context/CartContext';

const App =() => {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a la Tienda"/>}/>
            <Route path="/categories/:categoryId" element={<ItemListContainer greeting="Bienvenido a la Tienda"/>} />
            <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
