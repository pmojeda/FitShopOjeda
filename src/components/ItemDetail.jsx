import React, {useState, useContext} from "react";
import { Button, CardMedia, CardContent, CardActions } from '@mui/material';
import { Card } from '@mui/material';
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import ItemCount from '../components/ItemCount';
import {contexto} from "../context/CartContext";
import {Link} from "react-router-dom";

const ItemDetail = ({product}) => {
    const {addItem} = useContext(contexto);
    const [finalized, setFinalized] = useState(false);

    const onAddParent = (cantidad) => {
        addItem(product, cantidad);
        setFinalized(true);
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
                            { ! finalized ?
                                (
                                    <ItemCount stock={product.stock} initial={1} onAdd={onAddParent} />
                                ) : 
                                (
                                    <Link to="/cart" style={{ textDecoration: 'none' }}>
                                        <Button variant="outlined" color="secondary">Terminar mi Compra</Button>
                                    </Link>
                                )                            
                            }
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