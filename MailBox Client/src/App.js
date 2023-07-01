import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
function App() {

	const isLogin = useSelector((state) => state.auth.isLoggedIn);

	return (
		<>
			{isLogin && <Header/>}
			<Routes>
				<Route path="/*" element={<Layout />} />
			</Routes>
		</>
	);
}

export default App;
