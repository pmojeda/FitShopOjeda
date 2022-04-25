import React, {useContext} from 'react';
import {contexto} from "../context/CartContext";
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box} from '@mui/system';
import { IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

export const Cart = () => {
    const {items, removeItem, clear} = useContext(contexto);

    const totalCarrito = () => {
        let total = 0;

        items.forEach(item => {
            total += (item.quantity * item.price);
        });

        return total;
    }

    return (
        <>
            <Typography variant="h5">
                Carrito
            </Typography>
            <br></br>

            {items.length === 0 
                ? 
                    <Box sx={{margin: 3, textAlign: 'center'}}>                        
                        <h3>No hay productos agregados al carrito</h3> 
                        <br/>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" color="secondary">Ver Productos</Button>
                        </Link>
                    </Box>
                : 
                <>
                    <Box sx={{boxShadow: 1, margin: 5}} >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell>Producto</TableCell>
                                        <TableCell align="right">Cantidad</TableCell>
                                        <TableCell align="right">Precio</TableCell>
                                        <TableCell align="right">Subtotal</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {items.map((item) => (
                                        <TableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {item.title}
                                            </TableCell>
                                            <TableCell align="right">{item.quantity}</TableCell>
                                            <TableCell align="right">{item.price}</TableCell>
                                            <TableCell align="right">{(item.quantity * item.price)}</TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={() => {removeItem(item.id)}}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                    <TableRow>
                                        <TableCell colSpan={3}>Total</TableCell>
                                        <TableCell align="right">{totalCarrito()}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box sx={{margin: 5, textAlign: 'center'}}>                        
                        <Button variant="outlined" color="secondary" onClick={() => clear()}>Vaciar Carrito</Button>
                        <Link to="/CartOrder" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" color="secondary">Finalizar Compra</Button>
                        </Link>
                    </Box>
                </>
            }
        </>
      );
}