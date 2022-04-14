import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";
import {initialProducts} from "../mocks/InitialProducts";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
    console.log(categoryId);

    const promiseProducts = new Promise((resolve, reject) =>{
        setTimeout(()=>{
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
        })
        .catch ((error) => {
            console.log(`Error: ${error}`)
        })
    }, [categoryId]);

    return (
        <>
            <Typography variant="h5">
                {greeting}
            </Typography>

            <ItemList productList={products}/>
        </>
    )
}

export default ItemListContainer;