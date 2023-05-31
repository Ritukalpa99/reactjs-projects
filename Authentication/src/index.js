import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvdier } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthContextProvdier>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AuthContextProvdier>
);
