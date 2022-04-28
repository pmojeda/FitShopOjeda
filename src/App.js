import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {HashRouter, Routes, Route} from 'react-router-dom';
import {Cart} from './components/Cart';
import {Error} from './components/Error';
import CartProvider from './context/CartContext';
import CartOrder from './components/CartOrder';

const App =() => {

  return (
    <>
      <HashRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a la Tienda"/>}/>
            <Route path="/categories/:categoryId" element={<ItemListContainer greeting="Bienvenido a la Tienda"/>} />
            <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/cartorder" element={<CartOrder/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </CartProvider>
      </HashRouter>
    </>
  )
}

export default App;
