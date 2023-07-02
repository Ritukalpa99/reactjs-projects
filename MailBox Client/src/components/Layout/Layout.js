import { useSelector } from "react-redux";
import Singup from "../Auth/Signup";
import ComposeMail from "../Mail/composeMail";
import { Routes, Route } from "react-router-dom";
import Inbox from "../Mail/inbox";
import Sent from "../Mail/sent";
import MailDetails from "../Mail/mailDetails";
const Layout = () => {
	const isLogin = useSelector((state) => state.auth.isLoggedIn);
	
	return (
		<>
			
			{!isLogin && <Singup />}
			{isLogin && <h1 style={{margin : '1rem'}}>Welcome to MailBox Client</h1>}
			{isLogin &&
			<Routes>
				<Route path="/compose" element={<ComposeMail />} />
				<Route path="/" element={<Inbox/>}/>
				<Route path="/sent" element={<Sent/>}/>
				<Route path="/Maildetails/:id" element={<MailDetails/>}/>
			</Routes>
			}
		</>
	);
};

export default Layout;
