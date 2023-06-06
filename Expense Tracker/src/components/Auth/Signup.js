import classes from "./Signup.module.css";
import { useState } from "react";

const Singup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const submitHandler = (event) => {
		event.preventDefault();

		// alert(`${email},${password},${confirmPassword} has been triggered`)

		signupUser(email, password);

		setEmail("");
		setPassword("");
		setConfirmPassword("");
	};

	const signupUser = async (email, password) => {
		const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClyJBMlHDOKPK5KXQ9pnCn8lZ212AxtSg`;

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
            // console.log(data);
            if(!res.ok) {
                const errorMessage = data.error.message
                throw new Error(errorMessage)
            }
		} catch (err) {
            alert(err.message)
        }
	};
	return (
		<section className={classes.form}>
			<form onSubmit={submitHandler}>
				<div className={classes.sigup}>
					<h1 className={classes.title}>Signup</h1>
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
					</div>
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
							onChange={(e) => setConfirmPassword(e.target.value)}
							value={confirmPassword}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</section>
	);
};

export default Singup;
