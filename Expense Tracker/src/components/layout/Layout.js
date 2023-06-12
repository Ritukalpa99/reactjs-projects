import Auth from "../Auth/Auth";
import { useSelector } from "react-redux";
import Expense from "../Expense/Expense";
// import VerifyEmail from "../Auth/VeryEmail";
const Layout = () => {
	// const authCtx = useContext(AuthContext);
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	return (
		<>
			{!isLoggedIn && <Auth />}
			{isLoggedIn && <p>Welcome to expense Tracker</p>}
			{/* {authCtx.isLoggedIn && <VerifyEmail />} */}
			{isLoggedIn && <Expense/>}
		</>
	);
};

export default Layout;
