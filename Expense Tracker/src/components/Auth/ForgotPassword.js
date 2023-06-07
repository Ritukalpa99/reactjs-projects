import Modal from "../layout/Modal/Modal";
import classes from "./ForgotPassword.module.css";
import { useRef } from "react";
const ForgotPassword = (props) => {
	const emailRef = useRef();

	const closeModal = () => {
		props.onModalClose();
	};

	const handleResetPassword = async () => {
		alert(`Mail found ${emailRef.current.value}`);

		const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyClyJBMlHDOKPK5KXQ9pnCn8lZ212AxtSg`;
		try {
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify({
					requestType: "PASSWORD_RESET",
                    email : emailRef.current.value
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
            console.log(res);
			const data = await res.json();
            console.log(data);
			if (!res.ok) {
				const errorMessage = data.error.message;
				throw new Error(errorMessage);
			} else {
				alert("Check your email");
			}
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<Modal>
			<span className={classes.close} onClick={closeModal}>
				&times;
			</span>
			<h1 className={classes.title}>Reset Password</h1>
			<form>
				<div className={classes.input}>
					<label htmlFor="email-reset">Enter your email</label>
					<input
						type="email"
						id="email-reset"
						required
						placeholder="email"
						ref={emailRef}
					/>
				</div>
				<button
					style={{ margin: "2em" }}
					type="submit"
					className="btn btn-secondary"
					onClick={handleResetPassword}
				>
					Reset password
				</button>
			</form>
		</Modal>
	);
};

export default ForgotPassword;
