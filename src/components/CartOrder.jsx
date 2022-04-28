import React, {useContext, useState, useRef} from "react";
import { Box } from '@mui/material';
import { TextField, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {contexto} from "../context/CartContext";
import {db} from "../firebase/firebase";
import {getDoc, serverTimestamp, collection, addDoc, doc, updateDoc} from "firebase/firestore";

const CartOrder = () => {
    const [orderId, setOrderId] = useState(0);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const {items, clear, totalCart} = useContext(contexto);

    const confirmarCompra = () => {
        generarOrden();
        actualizarStock();        
        clear();        
    }

    const generarOrden = () => {
        let itemsCart = [];

        items.forEach(item => {
            itemsCart.push({id: item.id, title: item.title, price: item.price})
        });

        const saleCollection = collection(db, "Orders");
        
        addDoc(saleCollection, {
            buyer: {name: nameRef.current.value, phone: phoneRef.current.value, email: emailRef.current.value},
            items: itemsCart,
            date: serverTimestamp(),
            total: totalCart()
        }).then ((result) => {
            setOrderId(result.id);
        }).catch ((error) => {
            console.log(`Error: ${error}`)
        })
    }

    const actualizarStock = () =>{
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
                    {orderId === 0 ? (
                                    <div>
                                        <label id="lblTotal" >Total de la compra $ {totalCart()}</label>
                                        <br/>
                                        <TextField id="nameInput" label="Ingrese su nombre" variant="outlined" required inputRef={nameRef} />
                                        <br/>
                                        <TextField id="emailInput" label="Ingrese su Email" variant="outlined" required inputRef={emailRef}/>
                                        <br/>
                                        <TextField id="phoneInput" label="Ingrese su teléfono" variant="outlined" required inputRef={phoneRef}/>
                                        <br/>
                                        <Button variant="outlined" color="secondary" onClick={() => confirmarCompra()}>Confirmar Compra</Button>
                                    </div>
                                   )
                                 : 
                                   (
                                    <div>
                                        <h3>Compra Confirmada!</h3>
                                        <br/>
                                        <h5>Número de Orden: {orderId}</h5>
                                        <Link to="/" style={{ textDecoration: 'none' }}>
                                            <Button variant="outlined" color="secondary">Ver Productos</Button>
                                        </Link>
                                    </div>
                                   )
                    }
                </Box>
             </>
}

export default CartOrder;