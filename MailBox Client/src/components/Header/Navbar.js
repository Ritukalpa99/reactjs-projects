import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
const Navbar = () => {
	const isLogin = useSelector((state) => state.auth.isLoggedIn);
	const unrealMail = useSelector((state) => state.Mail.Mail);
	const dispatch = useDispatch();

	let unreatCount = 0;
	unrealMail.map((mail) => (mail.read ? unreatCount : unreatCount++));
	// document.title = `Inbox ${unreatCount}`;
	return (
		<nav>
			<div className={classes["main-head"]}>
				<div className={classes.text}>
					<NavLink to="/">
						<h1>MailBox Client</h1>
					</NavLink>
					<li>
						<NavLink className={classes.outline} to="/">
							INBOX 
						<sup className={classes.unread}>{unreatCount}</sup>
						</NavLink>
					</li>
					<li>
						<NavLink className={classes.outline} to="/sent">
							SENT
						</NavLink>
					</li>
					<li>
						<NavLink className={classes.outline} to="/compose">
							COMPOSE
						</NavLink>
					</li>
				</div>
				<div className={classes.signup}>
					{isLogin && (
						<button
							className="btn btn-outline-dark"
							onClick={() => dispatch(authActions.logout())}
						>
							Logout
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
