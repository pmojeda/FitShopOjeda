import React from "react";
import { useState } from "react";
import { Button, IconButton } from '@mui/material';
import { Card } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from "@mui/system";
import { alignProperty } from "@mui/material/styles/cssUtils";

const Item = ({product}) => {
    return (
        <>
            <Card variant="outlined" sx={{minWidth: 100, maxWidth: 250, display: 'inline-flex', margin: 2}}>
                <Box>
                    <img src={product.pictureUrl}></img>
                    <h3 >{product.title}</h3>
                    <br/>

                    <p><span>${product.price}</span></p>

                    <Button variant="outlined" color="secondary"  >Ver Detalle del Producto</Button>
                </Box>
            </Card>
        </>
    )
}

export default Item;