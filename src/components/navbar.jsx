import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (<AppBar sx={{ backgroundColor: "pink" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
            <NavLink className="navbar-link" to="/">
                <Typography>
                    Cofee shop Marleene.
                </Typography>
            </NavLink>
            <NavLink className="navbar-link" to="/">
                <Button sx={{ color: "white" }}>
                    Categorias
                </Button>
            </NavLink>
            <NavLink className="navbar-link" to="/products">
                <Button sx={{ color: "white" }}>
                    Productos
                </Button>
                <CartWidget>

                </CartWidget>
            </NavLink>
        </Toolbar>
    </AppBar>)
}

export default Navbar;