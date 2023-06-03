import React, { useState } from "react";

const AuthContext = React.createContext({
	token: "",
	id: "",
	isLoggedIn: false,
	login: (token, id) => {},
	logout: () => {},
});

export const AuthContextProvide = (props) => {
	const intialToken = localStorage.getItem("token");
	const [token, setToken] = useState(intialToken);
	const [id, setId] = useState("");
	const userIsLoggedIn = !!token;

	const loginHandler = (token, id) => {
		setToken(token);
		setId(id);
		localStorage.setItem("token", token);
        localStorage.setItem('user',id);
	};

	const logoutHandler = () => {
		setToken(null);
		localStorage.removeItem("token");
        localStorage.removeItem('user');
	};
	const contextValue = {
		token: token,
		id: id,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};
	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthContext;
