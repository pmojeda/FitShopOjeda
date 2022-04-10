import React, {useState, useContext, useEffect} from "react";
import { Button, CardMedia, CardContent, CardActions } from '@mui/material';
import { Card } from '@mui/material';
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import ItemCount from '../components/ItemCount';
import {contexto} from "../context/CartContext";

const ItemDetail = ({product}) => {
    const {addItem, items} = useContext(contexto);
    const [carrito, setCarrito] = useState(0);

    const onAddParent = (cantidad) => {
        console.log(`Se agregó al carrito ${cantidad} productos del productId: ${product.id} `);

        addItem(product, cantidad);
        setCarrito(cantidad);
    }

    //Sólo para verificar q se haya agregado el item correctamente
    useEffect(() => {
        console.log("Effect-items:")
        console.log(items);
        console.log(items.length);
      }, [items]);

    let action;

    if (carrito === 0){
        action = <ItemCount stock={product.stock} initial={1} onAdd={onAddParent} />
    }
    else{
        action = <Button variant="outlined" color="secondary" href={"/cart"}>Terminar mi Compra</Button>
    }

    return (
        <>
            <Card variant="outlined" sx={{minWidth: 200, maxWidth: 900, align: 'center', margin: 1}}>
                <CardContent variant="outlined" sx={{minWidth: 200, maxWidth: 900, display:"flex"} }>
                    <CardMedia
                        component="img"
                        sx={{width: 600, height:350}}
                        image={product.pictureUrls[0]}
                        border="1px solid"
                    />

                    <Box sx={{ display: 'flex', flexDirection: 'column', margin: 1 }}>
                        <Typography component="div" variant="h4">
                            {product.title}
                        </Typography>
                        <br/>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {product.detail}    
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary">
                            Observaciones: <br/>  
                            {product.comments}
                        </Typography>
                        <br/>
                        <Typography variant="body1" >
                            Precio: ${product.price}
                        </Typography>

                        <CardActions>
                            {action}
                        </CardActions>
                    </Box>
                </CardContent>

                <CardContent  sx={{display: "flex"}}>
                    <CardMedia
                        component="img"
                        sx={{width: 100, height:75, marginRight:1}}             
                        image={product.pictureUrls[0]}
                        border="1px solid"
                        
                    />
                    <CardMedia
                        component="img"
                        sx={{width: 100, height:75, marginRight:1}}
                        image={product.pictureUrls[1]}
                        border="1px solid"
                    />
                    <CardMedia
                        component="img"
                        sx={{width: 100, height:75, marginRight:1}} 
                        image={product.pictureUrls[2]}
                        border="1px solid"
                    />
                </CardContent>
            </Card>
        </>
    )
}

export default ItemDetail;