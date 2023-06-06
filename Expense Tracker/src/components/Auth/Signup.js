import classes from "./Signup.module.css";
import { useState,useContext } from "react";
import AuthContext from "../../store/auth-context";
const Singup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isLogin, setIsLogin] = useState(true);

    const authCtx = useContext(AuthContext);

	const submitHandler = (event) => {
		event.preventDefault();

		// alert(`${email},${password},${confirmPassword} has been triggered`)

		signUser(email, password);

		setEmail("");
		setPassword("");
		setConfirmPassword("");
	};

	const signUser = async (email, password) => {
		let url;
        if(isLogin) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClyJBMlHDOKPK5KXQ9pnCn8lZ212AxtSg`;
        } else {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClyJBMlHDOKPK5KXQ9pnCn8lZ212AxtSg`;
        }
		try {
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecutreToken: true,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			// console.log(res);
			const data = await res.json();
            authCtx.login(data.idToken);
			// console.log(data);
			if (!res.ok) {
				const errorMessage = data.error.message;
				throw new Error(errorMessage);
			} else {
                alert("Login successful")
            }
		} catch (err) {
			alert(err.message);
		}
	};
	return (
		<section className={classes.form}>
			<form onSubmit={submitHandler}>
				<div className={classes.sigup}>
					<h1 className={classes.title}>
						{isLogin ? "SingIn" : "SignUp"}
					</h1>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							E-Mail
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							required
							placeholder="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							required
							placeholder="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>{" "}
					{!isLogin && (
						<div className="mb-3">
							<label
								htmlFor="password-confirm"
								className="form-label"
							>
								Confirm Password
							</label>
							<input
								type="password"
								className="form-control"
								id="password-confirm"
								required
								placeholder="confirm password"
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
								value={confirmPassword}
							/>
						</div>
					)}
                    <div className="d-grid col-12">   
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
                    </div>
                    <button type="button" class="btn btn-link" onClick={() => setIsLogin((prev) => !prev)}>{isLogin ? 'SignIn' : 'SignUp'}</button>
				</div>
			</form>
		</section>
	);
};

export default Singup;
