import React from "react";
import Item from "../components/Item";

const ItemList = ({productList}) => {

    return (
        <>
            {productList.map( pr => <Item key={pr.id} product={pr}/>)}
        </>
    )
}

export default ItemList