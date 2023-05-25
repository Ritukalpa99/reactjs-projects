import classes from "./Nav.module.css"
const Nav = () => {
    const handleClick = () => {
        // alert('clieck here')
    }
    return <ul>
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
        <div className={classes["cart-holder"]} onClick={handleClick}>
            <div>Cart</div>
            <span>0</span>
        </div>
    </ul>
}

export default Nav;