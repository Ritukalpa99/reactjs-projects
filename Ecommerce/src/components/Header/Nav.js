import classes from "./Nav.module.css"
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const Nav = (props) => {

    const cartCtx = useContext(CartContext);

    const itemsCount = cartCtx.cartItems.length;

    return <ul>
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
        <div className={classes["cart-holder"]} onClick={props.onClick}>
            <div>Cart</div>
            <span>{itemsCount}</span>
        </div>
    </ul>
}

export default Nav;