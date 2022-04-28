import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import {contexto} from "../context/CartContext";

const CartWidget = () => {
    const {totalProducts} = useContext(contexto);

    return (
        <>
            <Badge badgeContent={totalProducts()} color="error">
                <ShoppingCartIcon color="secondary" fontSize="medium" />
            </Badge>
        </>
    )
}

export default CartWidget