import React from "react";
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { Box } from "@mui/system";
import { CardMedia} from '@mui/material';
import {Link} from "react-router-dom";

const Item = ({product}) => {
    return (
        <>
            <Card variant="outlined" sx={{minWidth: 100, maxWidth: 250, display: 'inline-flex', margin: 2}}>
                <Box>
                    <CardMedia
                        component="img"
                        sx={{width: 250, height:150}}
                        image={product.pictureUrls[0]}
                    />
                    <h3 >{product.title}</h3>
                    <br/>

                    <p><span>${product.price}</span></p>

                    <Link to={"/item/"+product.id} style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="secondary" > 
                            VER DETALLE
                        </Button>
                    </Link>
                </Box>
            </Card>
        </>
    )
}

export default Item;