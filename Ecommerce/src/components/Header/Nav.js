import classes from "./Nav.module.css"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const Nav = (props) => {

    const cartCtx = useContext(CartContext);

    const itemsCount = cartCtx.cartItems.length;

    return <ul className={classes['nav-list']}>
        <li>
            {/* <a href="/">Home</a> */}
            <NavLink to="/home">HOME</NavLink>
            {/* <Link to="/">HOME</Link> */}
        </li>
        <li>
            {/* <a href="/store">Home</a> */}
            <NavLink to="/">STORE</NavLink>
            {/* <Link to="/store">STORE</Link> */}
        </li>
        <li>
            {/* <a href="/about">Home</a> */}
            <NavLink to="/about">ABOUT</NavLink>
            {/* <Link href="/about">ABOUT</Link> */}
        </li>
        <li>
        <NavLink to="/contact">CONTACT US</NavLink>
        </li>
        <div className={classes["cart-holder"]} onClick={props.onClick}>
            <div>Cart</div>
            <span>{itemsCount}</span>
        </div>
    </ul>
}

export default Nav;