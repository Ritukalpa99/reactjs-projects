import Layout from "./components/layout/Layout";
// import { AuthContextProvider } from "./store/auth-context";
import Header from "./components/layout/header/header";
import "./App.css";
import UserProfile from "./components/layout/User/UserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="dark">
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
