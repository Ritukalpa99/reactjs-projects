import Nav from "./Nav";
import classes from "./Header.module.css";
const Header = (props) => {
    return <header>
        <Nav onClick={props.onShowCart}/>
        <div className={classes.title}>
            <h1> The Generics</h1>
        </div>
    </header>
}

export default Header;