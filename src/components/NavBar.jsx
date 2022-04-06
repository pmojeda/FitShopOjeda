import React from "react";
import "../css/NavBar.css";
import { Button } from '@mui/material';
import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const categories = [
        { name: "Pesas y Mancuernas", route: "/categories/1", id: 1 },
        { name: "Accesorios", route: "/categories/2", id: 2 },
        { name: "Yoga y Pilates", route: "/categories/3", id: 3 }
      ];

    return (
        <>   
            <nav className="container">            
                <ul>   
                    <li>
                        <NavLink to="/"> 
                            <h1>FitShop</h1>
                        </NavLink>                        
                    </li>   

                    {categories.map((element) => {
                        return (
                        <li>
                            <NavLink key={element.id} to={element.route}>
                                {element.name}
                            </NavLink>
                        </li>
                        );
                    })}

                    <li><Button variant="outlined" color="secondary">Login</Button></li>
                    
                    <li>
                        <NavLink to="/cart"> 
                            <CartWidget/> 
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar