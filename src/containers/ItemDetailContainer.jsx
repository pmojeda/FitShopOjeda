import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import {useParams} from "react-router-dom";
import {db} from "../firebase/firebase";
import {getDoc, doc, collection} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {productId} = useParams();

    useEffect(() => {
        const productList = collection(db, "ItemCollection");
        const refDoc = doc(productList, productId);

        getDoc(refDoc)
        .then((result) => {
            setProduct({id:productId, ...result.data()});            
        })
        .catch ((error) => {
            console.log(`Error: ${error}`)
        })
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