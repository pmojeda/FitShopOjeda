import React, {createContext, useState} from "react";
 
export const contexto = createContext();
const {Provider} = contexto;

const CartProvider = ({children}) => {    
    const [items, setItems] = useState([]);   
 
    const addItem = (item, quantity) => {
        if (! isInCart(item.id))
        {
            const newItem = {id: item.id, title: item.title, price: item.price, quantity: quantity};
            setItems([...items, newItem]);  
        }
        else{
            const oldIndex = items.findIndex(x => x.id === item.id);
            const aux = [...items];
            aux[oldIndex].quantity += quantity;
            setItems(aux);
        }
    }

    const removeItem = (itemId) => {
        setItems(items.filter(x => x.id !== itemId));
    }

    const clear = () => {
        setItems([]);
    }

    const isInCart = (itemId) => {
        return (items.findIndex(x => x.id === itemId) >= 0)
    }

    const totalProducts = () => {
        let total = 0;

        items.forEach(item => {
            total += (item.quantity);
        });

        return total;
    }

    const totalCart = () => {
        let total = 0;

        items.forEach(item => {
            total += (item.quantity * item.price);
        });

        return total;
    }

    return (
        <Provider value={{items, addItem, removeItem, clear, totalCart, totalProducts}}>{children}</Provider>
    )
}

export default CartProvider;