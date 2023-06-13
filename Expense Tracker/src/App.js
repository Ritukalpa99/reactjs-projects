import Layout from "./components/layout/Layout";
// import { AuthContextProvider } from "./store/auth-context";
import Header from "./components/layout/header/header";
import "./App.css";
import UserProfile from "./components/layout/User/UserProfile";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	const theme = useSelector((state) => state.theme);
	// console.log(theme);
	// alert(theme)
	return (
		<div className={`${theme} main`}>
			<Router>
				<Header />
				<Routes>
					<Route path="/update-user" element={<UserProfile />} />
					<Route path="/" element={<Layout />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
