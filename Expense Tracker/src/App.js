import Auth from "./components/Auth/Auth.js";
import  {AuthContextProvider}  from "./store/auth-context";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
function App() {
	const authCtx = useContext(AuthContext);

	return <AuthContextProvider>
		<h1>Starter</h1>
		{!authCtx.isLoggedIn && 
		<Auth />}
		{authCtx.isLoggedIn && <p>Welcome to expense Tracker</p>}
	</AuthContextProvider>
}

export default App;