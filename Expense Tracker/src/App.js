import Layout from "./components/layout/Layout";
import  {AuthContextProvider}  from "./store/auth-context";
function App() {
	
	
	return <AuthContextProvider>
		<h1>Starter</h1>
		<Layout/>
	</AuthContextProvider>
}

export default App;