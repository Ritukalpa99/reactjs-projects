import classes from "./header.module.css";
import {Link} from 'react-router-dom';
const Header = () => {
    return <nav className={classes.navbar}>
        <h1>Expense Tracker</h1>
        <div className={classes['profile-msg']}>
            Your profile is incomplete
            <Link to="/update-user">Complete Now</Link>
        </div>
    </nav>
}

export default Header;