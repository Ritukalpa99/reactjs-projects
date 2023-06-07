import Auth from "../Auth/Auth";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import VerifyEmail from "../Auth/VeryEmail";
const Layout = () => {
	const authCtx = useContext(AuthContext);

	return (
		<>
			{!authCtx.isLoggedIn && <Auth />}
			{authCtx.isLoggedIn && <p>Welcome to expense Tracker</p>}
			{authCtx.isLoggedIn && <VerifyEmail />}
		</>
	);
};

export default Layout;
