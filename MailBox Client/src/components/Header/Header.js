import Navbar from "./Navbar";
import classes from "./Header.module.css";

const Header = () => {
    return <div className={classes.header}>
            <Navbar/>
        </div>
}

export default Header;