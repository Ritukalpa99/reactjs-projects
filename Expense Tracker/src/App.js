import Layout from "./components/layout/Layout";
import { AuthContextProvider } from "./store/auth-context";
import Header from "./components/layout/header/header";
import UserProfile from "./components/layout/User/UserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<AuthContextProvider>
			<Router>
				<Header />
				<Routes>
					<Route path="/update-user" element={<UserProfile/>}/>
					<Route path="/" element={<Layout />} />
				</Routes>
			</Router>
		</AuthContextProvider>
	);
}

export default App;
