import React, {useContext} from 'react';
import {contexto} from "../context/CartContext";

export const Cart = () => {
    const {items} = useContext(contexto);

    return (
            <>
                <h1> Cart</h1>
                <h2>Items: {items.length}</h2>
            </>
    )

}