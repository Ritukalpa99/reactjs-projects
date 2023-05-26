import classes from "./Nav.module.css"
const Nav = (props) => {
    return <ul>
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
        <div className={classes["cart-holder"]} onClick={props.onClick}>
            <div>Cart</div>
            <span>0</span>
        </div>
    </ul>
}

export default Nav;