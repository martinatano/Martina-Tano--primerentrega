import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import UserRegistrationForm from './UserRegistrationForm'; // Asegúrate de usar la ubicación correcta del archivo del formulario de usuario

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCartContext();
    const handleCompletePurchase = () => {
        const orderDetails = {
            productos: cart.items.map(item => ({
                productId: item.id,
                cantidad: item.quantity,
            })),
            total: cart.total,
        };
        sendOrderDetailsToForm(orderDetails);
    }

    return (
        <div className="container">
            <Paper elevation={3}>
                <Typography variant="h6" component="div" align="center" sx={{ p: 2 }}>
                    Cart
                </Typography>
                {cart.items.length === 0 ? (
                    <Typography variant="body2" align="center" sx={{ p: 2 }}>
                        Carrito vacío
                    </Typography>
                ) : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Imagen</TableCell>
                                    <TableCell>Producto</TableCell>
                                    <TableCell>Precio</TableCell>
                                    <TableCell>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.items.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell><img style={{ width: "10%", height: "10%" }} src={item.image} alt={item.title} /></TableCell>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>${item.price}</TableCell>
                                        <TableCell>${item.price * item.quantity}</TableCell>
                                        <TableCell> <button onClick={() => removeFromCart(item)} style={{ color: "red" }}>X </button></TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={3}>Total:</TableCell>
                                    <TableCell>${cart.total.toFixed(2)}</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell> </TableCell>
                                    <TableCell><button onClick={() => clearCart()} className="cart-button"> Vaciar carrito</button></TableCell>
                                    <TableCell>
                                        <button onClick={handleCompletePurchase} className="finish-button">
                                            <Link to="/detalle-compra">Terminar compra </Link>
                                        </button>
                                    </TableCell>

                                </TableRow>


                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Paper>
        </div>
    );
};

export default Cart;

