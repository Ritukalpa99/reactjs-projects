import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Login.module.css"
const Logout = () => {

    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const logoutHandler = () => {
        authCtx.logout();
        navigate('/login')
    }
    return <button className={classes.btn} style={{'padding': '10px', 'margin-left' :'46vw','margin-top':'2em', 'margin-bottom': '2em'}} onClick={logoutHandler}>
        Logout
    </button>
}

export default Logout;



