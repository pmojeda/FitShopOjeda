import React from "react";
import Item from "./Item";

const ItemList = ({productList}) => {

    return (
        <>
            {productList.map( pr => <Item key={pr.id} product={pr}/>)}
        </>
    )
}

export default ItemList