import React, { Component } from "react";
/*
const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h1>{greeting}</h1>
            <h2>Catálogos disponibles...</h2>
        </>
    )
}
*/

class ItemListContainer extends Component{
    render() {
        return (
            <>
                <h1>{this.props.greeting}</h1>
                <h2>Catálogos disponibles...</h2>
            </>
            )
    }
}

export default ItemListContainer;