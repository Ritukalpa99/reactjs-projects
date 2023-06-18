import Singup from "./components/Auth/Signup";
import { useSelector } from "react-redux";


function App() {
    const isLogin = useSelector((state) => state.auth.isLoggedIn)
    return <>
        <h1>Running</h1>
        {isLogin && <h1>User's is logged In</h1>}
        <Singup />
    </>
}

export default App;