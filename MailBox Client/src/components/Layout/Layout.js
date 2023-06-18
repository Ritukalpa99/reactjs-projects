import { useSelector } from "react-redux";
import Singup from "../Auth/Signup";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
const Layout = () => {
	const isLogin = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();
	return (
		<>
			{isLogin && (
				<button onClick={() => dispatch(authActions.logout())}>
					Logout
				</button>
			)}
			{!isLogin && <Singup />}
			{isLogin && <h1>Welcome to MailBox Client</h1>}
		</>
	);
};

export default Layout;
