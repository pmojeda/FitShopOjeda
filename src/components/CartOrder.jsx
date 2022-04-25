import React, {useContext, useState, useRef} from "react";
import { Box } from '@mui/material';
import { TextField, Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import {contexto} from "../context/CartContext";
import {db} from "../firebase/firebase";
import {getDoc, serverTimestamp, collection, addDoc, doc, updateDoc, connectFirestoreEmulator} from "firebase/firestore";

const CartOrder = () => {
    const [orderId, setOrderId] = useState(0);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const {items, clear} = useContext(contexto);

    const totalCarrito = () => {
        let total = 0;

        items.forEach(item => {
            total += (item.quantity * item.price);
        });

        return total;
    }

    const confirmarCompra = () => {
        console.log("Confirmando...");

        //1ro Armar los items con el objeto item según lo especificado en el Desafío
        let itemsCart = [];

        items.forEach(item => {
            itemsCart.push({id: item.id, title: item.title, price: item.price})
        });
        
        console.log(itemsCart);

        //2do: Agregar la Orden
        const saleCollection = collection(db, "Orders");
        
        addDoc(saleCollection, {
            buyer: {name: nameRef.current.value, phone: phoneRef.current.value, email: emailRef.current.value},
            items: itemsCart,
            date: serverTimestamp(),
            total: totalCarrito()
        }).then ((result) => {
            setOrderId(result.id);
        }).catch ((error) => {
            console.log(`Error: ${error}`)
        })

        //3ro: Actualizar Stock
        let refDoc;
        let stockFinal;

        items.forEach(item => {
            refDoc = doc(db, "ItemCollection", item.id)

            getDoc(refDoc)
            .then((result) => {
                stockFinal = result.data().stock - item.quantity;
                updateDoc(refDoc, {stock: stockFinal})
            })
            .catch ((error) => {
                console.log(`Error: ${error}`)
            })            
        });
        
        //4to Vaciar el carrito
        clear();        
    }

    return  <>
                <Typography variant="h5">
                    Orden de Compra
                </Typography>
                <br></br>                          

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >         
                    <label id="lblTotal" >Total de la compra $ {totalCarrito()}</label>
                    <br/>
                    <TextField id="nameInput" label="Ingrese su nombre" variant="outlined" required inputRef={nameRef} />
                    <br/>
                    <TextField id="emailInput" label="Ingrese su Email" variant="outlined" required inputRef={emailRef}/>
                    <br/>
                    <TextField id="phoneInput" label="Ingrese su teléfono" variant="outlined" required inputRef={phoneRef}/>
                    <br/>
                    {orderId == 0 ? (
                                    <Button variant="outlined" color="secondary" onClick={() => confirmarCompra()}>Confirmar Compra</Button>
                                   )
                                 : 
                                   (
                                    <div>
                                        <h4>Compra Confirmada!</h4>
                                        <h5>Número de Orden: {orderId}</h5>
                                        <Button variant="outlined" color="secondary">Ver Productos</Button>
                                    </div>
                                   )
                    }
                </Box>
             </>
}

export default CartOrder;