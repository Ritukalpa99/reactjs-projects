import classes from "./header.module.css";
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/authSlice";
const Header = () => {
    // const authCtx = useContext(AuthContext);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navigate = useNavigate();
    const logHandler = () => {
        dispatch(authActions.logout())
        // authCtx.logout();
        navigate('/')
    }
    return <nav className={classes.navbar}>
        <h1>Expense Tracker</h1>
        {isLoggedIn &&
        <h3 className={classes.log} onClick={logHandler}>Logout</h3>}
        {/* <div className={classes['profile-msg']}>
            Your profile is incomplete
            <Link to="/update-user">Complete Now</Link>
        </div> */}
    </nav>
}

export default Header;