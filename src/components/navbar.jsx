import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import CartWidget from './CartWidget';
import './Navbar.css';


const Navbar = () => {
    return (<AppBar sx= {{backgroundColor: "pink"}}>
        <Toolbar sx = {{ display: "flex", justifyContent: "space-around"}}>
            <Typography>
                Cofee shop Marleene.
            </Typography>
         <Button sx={{ color: "white"}}>
            Home
         </Button>
         <Button sx={{ color: "white"}}>
            Categorias
         </Button>
         <Button sx={{ color: "white"}}>
            Productos
         </Button>
         <CartWidget>
            
         </CartWidget>
        </Toolbar>
    </AppBar>)
}

export default Navbar;