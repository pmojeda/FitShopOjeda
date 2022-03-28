import React, { Component } from "react";
import ItemCount from "./ItemCount";

const onAddParent = (cantidad) => {
    console.log("Se ejecutó el onAddParent " + cantidad);
}

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h1>{greeting}</h1>

            <ItemCount stock={5} initial={1} onAdd={onAddParent}/>
        </>
    )
}

export default ItemListContainer;