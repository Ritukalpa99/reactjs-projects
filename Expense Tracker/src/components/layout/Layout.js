import Auth from "../Auth/Auth";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
const Layout = () => {
	const authCtx = useContext(AuthContext);

	return (
		<>
			{!authCtx.isLoggedIn && <Auth />}
			{authCtx.isLoggedIn && <p>Welcome to expense Tracker</p>}
		</>
	);
};

export default Layout;
