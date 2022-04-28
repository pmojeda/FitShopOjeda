import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";
import {db} from "../firebase/firebase";
import {getDocs, collection, query, where} from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        const productList = collection(db, "ItemCollection");
        const q = categoryId !== undefined ? query(productList, where("categoryId", "==", categoryId)) : productList;

        getDocs(q)
        .then((result) => {
            const docs = result.docs;
            const lista = docs.map(x => {
                const id = x.id;
                const product = { id, ...x.data()};

                return product;
            })

            setProducts(lista);
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