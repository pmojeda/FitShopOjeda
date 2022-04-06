import React, { Component, useEffect, useState } from "react";
/*import ItemCount from "../components/ItemCount";*/
import ItemList from "./ItemList";
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";
import {initialProducts} from "../mocks/InitialProducts";

const ItemListContainer = ({greeting}) => {
    const onAddParent = (cantidad) => {
        console.log(`Se agregó al carrito ${cantidad} productos`);
    }

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
    console.log(categoryId);

    const promiseProducts = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('Resolviendo...')
            resolve(initialProducts);
        }, 2000)
    });

    useEffect(() => {
        promiseProducts.then((prodList) => {
            if (categoryId){
                setProducts(prodList.filter( x => x.categoryId === categoryId))
            }
            else {
                setProducts(prodList);
            }
            
            console.log('Resuelto!');
        })
        .catch ((error) => {
            console.log(`Error: ${error}`)
        })
    }, [categoryId]);

    return (
        <>
            <Typography component="div" variant="h5">
                {greeting}
            </Typography>

            <ItemList productList={products}/>
        </>
    )
}

export default ItemListContainer;