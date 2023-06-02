import AuthContext from "../../store/auth-context";
import classes from "./Login.module.css";
import { useRef, useContext } from "react";
const Login = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");

	const authCtx = useContext(AuthContext);

	const authenticateUser = async (enteredEmail, enteredPassword) => {
		const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkB-O7HrlKHlMd86xHpMOhh2U7L8SJMhk`;
		try {
			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify({
					email: enteredEmail,
					password: enteredPassword,
					returnSecutedToken: true,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();
			if (response.ok) {
				authCtx.login(data.idToken);
			} else {
				let errorMessage = "Auth Failed!";
				throw new Error(errorMessage);
			}
		} catch (err) {
			alert(err.message);
		}
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailRef.current.value;
		const enteredPassword = passwordRef.current.value;
		authenticateUser(enteredEmail, enteredPassword);
		// alert(`You details are ${enteredEmail}, ${enteredPassword}`);
	};
	return (
		<form onSubmit={submitHandler}>
			<div className={classes.control}>
				<lable htmlFor="email">E-Mail</lable>
				<input type="email" id="mail" required ref={emailRef} />
			</div>
			<div className={classes.control}>
				<lable htmlFor="password">Your Password</lable>
				<input
					type="password"
					id="password"
					required
					minLength="7"
					ref={passwordRef}
				/>
			</div>
			<button type="submit" className={classes.submit}>
				Submit{" "}
			</button>
		</form>
	);
};

export default Login;
