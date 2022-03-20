import React from "react";
import "../css/NavBar.css"
import { Button } from '@mui/material';
import logo from "../img/logoTienda.png";
 
const NavBar = () => {
    return (
        <>   
            
            <nav className="container">
            
                <ul>   
                    <li><h1>Tienda FitShop</h1></li>                     
                    <li><Button variant="outlined" color="secondary" >Inicio</Button></li>
                    <li><a href="#">Pesas y Mancuernas</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Yoga y Pilates</a></li>
                    <li><Button variant="outlined" color="secondary">Login</Button></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar