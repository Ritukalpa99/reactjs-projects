import Nav from "./Nav";
import classes from "./Header.module.css";
const Header = () => {
    return <header>
        <Nav />
        <div className={classes.title}>
            <h1> The Generics</h1>
        </div>
    </header>
}

export default Header;