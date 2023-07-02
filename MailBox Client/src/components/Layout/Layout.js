import { useSelector } from "react-redux";
import Singup from "../Auth/Signup";
import ComposeMail from "../Mail/composeMail";
import { Routes, Route } from "react-router-dom";
import Inbox from "../Mail/inbox";
import Sent from "../Mail/sent";
const Layout = () => {
	const isLogin = useSelector((state) => state.auth.isLoggedIn);
	
	return (
		<>
			
			{!isLogin && <Singup />}
			{isLogin && <h1>Welcome to MailBox Client</h1>}
			<Routes>
				<Route path="/compose" element={<ComposeMail />} />
				<Route path="/inbox" element={<Inbox/>}/>
				<Route path="/sent" element={<Sent/>}/>
			</Routes>
		</>
	);
};

export default Layout;
