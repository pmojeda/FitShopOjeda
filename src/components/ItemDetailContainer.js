import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const initialProducts = [
    {   id:1, 
        title:"Colchoneta Violeta", 
        price: 2500.00, 
        detail: "Colchoneta fabricada con material antialérgico y lavable. El interior es de goma espuma.", 
        comments:"Recomendable para practicar Yoga", 
        pictureUrls:[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2bkweJQYUkf9tMH-hCvl46O9ax6hPcaLEA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTw8cBdpG3mNUw1DCPmthKHvMKOl5SvWnp5A&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSWmRYIZ1gPJigzQuK4vzAKBYpfbx60uFXg&usqp=CAU"]
    },
]

const getItem = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log('Resolviendo...')
        resolve(initialProducts[0]);
    }, 2000)
});

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getItem.then((prod) => {
            setProduct(prod);
            console.log('Resuelto!');
        })
        .catch ((error) => {
            console.log(`Error: ${error}`)
        })
    }, [])

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