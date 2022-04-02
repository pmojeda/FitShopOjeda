import React from "react";
import { Button, IconButton } from '@mui/material';
import { Card } from '@mui/material';
import { Box } from "@mui/system";

const Item = ({product}) => {
    return (
        <>
            <Card variant="outlined" sx={{minWidth: 100, maxWidth: 250, display: 'inline-flex', margin: 2}}>
                <Box>
                    <img src={product.pictureUrl}></img>
                    <h3 >{product.title}</h3>
                    <br/>

                    <p><span>${product.price}</span></p>

                    <Button variant="outlined" color="secondary" >Ver Detalle</Button>
                </Box>
            </Card>
        </>
    )
}

export default Item;