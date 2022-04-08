import React, {createContext, useState} from "react";
 
export const contexto = createContext();
const {Provider} = contexto;

const CartProvider = ({children}) => {    
    //const [items, setItems] = useState([]);     
    const [items, setItems] = useState([{id: 99, title: "test 99", price: 99, quantity: 1}]); //Inicialicé con 1 item sólo para Test

    const addItem = (item, quantity) => {
        console.log(`Agregar Item ${item.title}`);

        if (! isInCart(item.id))
        {
            console.log("no encontrado");
            console.log(items);
            let newItem = {id: item.id, title: item.title, price: item.price, quantity: quantity};
            console.log(newItem);
            setItems([...items, newItem]);  //Agrego el nuevo Item
            console.log(items);  //No me lo agrega!!!
        }
    }

    const removeItem = (itemId) => {
        console.log(`Eliminar Item ${itemId}`);

        setItems(items.filter(x => x.id !== itemId));
    }

    const clear = () => {
        setItems([]);
    }

    const isInCart = (id) => {
        console.log(`Buscar Item ${id}`);

        return (items.find(x => x.id === id) !== undefined)
    }

    return (
        <Provider value={{items, addItem, removeItem, clear}}>{children}</Provider>
    )
}

export default CartProvider;