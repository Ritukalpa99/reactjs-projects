import classes from "./Content.module.css"
import ContentItem from "./ContentItem";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
const Content = (props) => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    if(!authCtx.isLoggedIn) {
        navigate('/login');
        return;
    }
    return <section className={classes.container}>
        <h2>Music</h2>
        <div className={classes['music-content']}>
         {props.items.map((item) => {
            return <ContentItem item={item}/>
            
        })} 
        
        </div>
    </section>
}

export default Content;