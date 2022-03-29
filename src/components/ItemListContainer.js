import React, { Component, useEffect, useState } from "react";
/*import ItemCount from "./ItemCount";*/
import ItemList from "./ItemList";

const initialProducts = [
    {id:1, title:"Colchoneta Violeta", price: 1.00, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2bkweJQYUkf9tMH-hCvl46O9ax6hPcaLEA&usqp=CAU"},
    {id:2, title:"Colchoneta Celeste", price: 2.00, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTw8cBdpG3mNUw1DCPmthKHvMKOl5SvWnp5A&usqp=CAU"},
    {id:3, title:"Colchoneta Verde", price: 3.00, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSWmRYIZ1gPJigzQuK4vzAKBYpfbx60uFXg&usqp=CAU"}
]

const onAddParent = (cantidad) => {
    console.log(`Se agregó al carrito ${cantidad} productos`);
}

const promiseProducts = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log('Resolviendo...')
        resolve(initialProducts);
    }, 2000)
});

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        promiseProducts.then((prodList) => {
            setProducts(prodList);
            console.log('Resuelto!');
        })
        .catch ((error) => {
            console.log(`Error: ${error}`)
        })
    }, [])

    return (
        <>
            <h1>{greeting}</h1>

            <ItemList productList={products}/>
        </>
    )
}

export default ItemListContainer;