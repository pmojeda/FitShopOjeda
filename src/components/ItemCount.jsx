import React from "react";
import { useState } from "react";
import { Button, IconButton } from '@mui/material';
import { Card } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from "@mui/system";

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial);

    const handlerClickSumar = () => {
        if (cantidad < stock)
        {
            setCantidad(cantidad + 1);            
        }
        else    
        {
            console.log('No hay más stock');
        }
    }
    
    const handlerClickRestar = () => {
        if (cantidad > 0)
        {
            setCantidad(cantidad - 1);
        }
        else    
        {
            console.log('La cantidad ya es cero');
        }
    }

    const agregarAlCarrito = () => {
        if(cantidad > 0){
            onAdd(cantidad);
        }
    }

    return (
        <>
            <Card sx={{minWidth: 100, maxWidth: 200}}>
                <Box variant="Card">
                    Cantidad: 

                    <IconButton onClick={handlerClickRestar} >
                        <RemoveIcon/>
                    </IconButton>

                    {cantidad}

                    <IconButton onClick={handlerClickSumar} >
                        <AddIcon/>
                    </IconButton>
                </Box>

                <Button variant="outlined" color="secondary" onClick={agregarAlCarrito} >Agregar al Carrito</Button>
            </Card>
        </>
    )
}

export default ItemCount;