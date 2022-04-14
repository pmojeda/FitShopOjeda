import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import {contexto} from "../context/CartContext";

const CartWidget = () => {
    const {items} = useContext(contexto);

    const totalProducts = () => {
        let total = 0;

        items.forEach(item => {
            total += (item.quantity);
        });

        console.log("cant:");
        console.log(total);

        return total;
    }

    return (
        <>
            <Badge badgeContent={totalProducts()} color="error">
                <ShoppingCartIcon color="secondary" fontSize="medium" />
            </Badge>
        </>
    )
}

export default CartWidget