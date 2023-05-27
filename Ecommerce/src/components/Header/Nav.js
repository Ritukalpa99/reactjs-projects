import classes from "./Nav.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const Nav = (props) => {

    const cartCtx = useContext(CartContext);

    const itemsCount = cartCtx.cartItems.length;

    return <ul>
        <li>
            
            <Link to="/">HOME</Link>
        </li>
        <li>
            
            <Link to="/store">STORE</Link>
        </li>
        <li>
            
            <Link href="/about">ABOUT</Link>
        </li>
        <div className={classes["cart-holder"]} onClick={props.onClick}>
            <div>Cart</div>
            <span>{itemsCount}</span>
        </div>
    </ul>
}

export default Nav;