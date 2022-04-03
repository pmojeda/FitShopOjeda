import React from "react";
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { Box } from "@mui/system";
import { CardMedia} from '@mui/material';

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

                    <Button variant="outlined" color="secondary" href={"/item/"+product.id} > 
                        VER DETALLE
                    </Button>
                </Box>
            </Card>
        </>
    )
}

export default Item;