import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import {initialProducts} from "../mocks/InitialProducts";
import {useParams} from "react-router-dom";
import {db} from "../firebase/firebase";
import {getDoc, doc, collection} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {productId} = useParams();
    console.log(productId);

    /* VERSION ANTERIOR A LA IMPLEMENTACION DE FIREBASE
    const getItem = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('Resolviendo...')
            resolve(initialProducts);
        }, 2000)
    });
    */

    useEffect(() => {
        const productList = collection(db, "ItemCollection");
        const refDoc = doc(productList, productId);

        getDoc(refDoc)
        .then((result) => {
            console.log(result);
            console.log(result.data());
            setProduct({id:productId, ...result.data()});            
        })
        .catch ((error) => {
            console.log(`Error: ${error}`)
        })

        /* VERSION ANTERIOR A LA IMPLEMENTACION DE FIREBASE
        getItem.then((prodList) => {
            console.log('a resolver...');
            setProduct(prodList.filter(x => x.id == productId)[0]);
            console.log('Resuelto!');
        })
        .catch ((error) => {
            console.log(`Error: ${error}`)
        })
        */
    }, [productId])

    return (
        <>
            {product != null &&
                <ItemDetail product={product} />
            }
        </>
    )
}

export default ItemDetailContainer;