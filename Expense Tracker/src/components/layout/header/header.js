import classes from "./header.module.css";
import {Link, useNavigate} from 'react-router-dom';
import AuthContext from "../../../store/auth-context";
import { useContext } from "react";
const Header = () => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const logHandler = () => {
        authCtx.logout();
        navigate('/')
    }
    return <nav className={classes.navbar}>
        <h1>Expense Tracker</h1>
        {authCtx.isLoggedIn &&
        <h3 className={classes.log} onClick={logHandler}>Logout</h3>}
        <div className={classes['profile-msg']}>
            Your profile is incomplete
            <Link to="/update-user">Complete Now</Link>
        </div>
    </nav>
}

export default Header;