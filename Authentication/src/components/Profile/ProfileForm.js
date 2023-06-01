import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";
import { useHistory } from "react-router-dom";
import { useRef, useContext } from "react";
const ProfileForm = () => {
	const history = useHistory();
	const newPasswordInputRef = useRef();
	const authCtx = useContext(AuthContext);
	const submitHandler = (event) => {
		event.preventDefault();

		const enteredNewPassword = newPasswordInputRef.current.value;

		fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAkB-O7HrlKHlMd86xHpMOhh2U7L8SJMhk",
			{
				method: "POST",
				body: JSON.stringify({
					idToken: authCtx.token,
					password: enteredNewPassword,
					returnSecureToken: false,
				}),
				headers: {
					"Content-Type": "applicaton/json",
				},
			}
		).then((res) => {
			//assume : always successful
			history.replace("/");
		});
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input
					type="password"
					id="new-password"
					minLength="7"
					ref={newPasswordInputRef}
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
