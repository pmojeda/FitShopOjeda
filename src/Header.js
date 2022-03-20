import React from "react";
import "./Header.css"
import logo from "./img/logoTienda.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" className="logo"></img>
            <h1>Bienvenido a tu tienda online</h1>
            <nav>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </nav>
            <ShoppingCartIcon color="disabled" />
        </div>
    )

}

export default Header