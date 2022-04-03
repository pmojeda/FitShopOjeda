import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {initialProducts} from "../mocks/InitialProducts";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {productId} = useParams();
    console.log(productId);

    const getItem = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('Resolviendo...')
            resolve(initialProducts);
        }, 2000)
    });

    useEffect(() => {
        getItem.then((prodList) => {
            console.log('a resolver...');
            setProduct(prodList.filter(x => x.id == productId)[0]);
            console.log('Resuelto!');
        })
        .catch ((error) => {
            console.log(`Error: ${error}`)
        })
    }, [productId])

    let item;

    if (product != null) {
        item = <ItemDetail product={product} />;
    }

    return (
        <>
            {item}
        </>
    )
}

export default ItemDetailContainer;