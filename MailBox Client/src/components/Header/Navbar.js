import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
const Navbar = () => {
	const isLogin = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	return (
		<nav>
			<div className={classes["main-head"]}>
				<div className={classes.text}>
					<NavLink to="/">
						<h1>MailBox Client</h1>
					</NavLink>
					<li>
						<NavLink to="/inbox">INBOX</NavLink>
					</li>
					<li>
						<NavLink to="/sent">SENT</NavLink>
					</li>
					<li>
						<NavLink to="/compose">COMPOSE</NavLink>
					</li>
				</div>
				<div className={classes.signup}>
					{isLogin && (
						<button onClick={() => dispatch(authActions.logout())}>
							Logout
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
