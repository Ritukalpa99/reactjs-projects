import classes from "./UserProfile.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
	const navigate = useNavigate();
	const nameInputRef = useRef();
	const urlInputRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredUrl = urlInputRef.current.value;

		// alert(`${enteredName}${enteredUrl}`);
		updateUserDetails(enteredName, enteredUrl);
		// navigate('/');
		nameInputRef.current.value = "";
		urlInputRef.current.value = "";
	};

	const updateUserDetails = async (name, imgUrl) => {
		const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyClyJBMlHDOKPK5KXQ9pnCn8lZ212AxtSg`;
		try {
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify({
					idToken: localStorage.getItem("token"),
					displayName: name,
					photoUrl: imgUrl,
					returnSecutreToken: true,
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
			}
		} catch (err) {
			alert(err.message);
		}
	};

	const handleUserEdit = async () => {
		const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyClyJBMlHDOKPK5KXQ9pnCn8lZ212AxtSg`;
		try {
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify({
					idToken: localStorage.getItem("token"),
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			// console.log(res);
			const data = await res.json();
			// console.log(data);

			if (!res.ok) {
				const errorMessage = data.error.message;
				throw new Error(errorMessage);
			}
			const fetchedUserName = data.users[0].displayName;
			const fetchedUrl = data.users[0].photoUrl;

            nameInputRef.current.value = fetchedUserName;
		    urlInputRef.current.value = fetchedUrl;
            
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<div className={classes["form-input"]}>
				<label> Full Name</label>
				<input type="text" required ref={nameInputRef} />
				<label>Profile Photo Url</label>
				<input type="text" required ref={urlInputRef} />
			</div>
			<div className={classes.btn}>
				<button type="submit">Submit</button>
				<input type="button" onClick={handleUserEdit} value="Edit" />
			</div>
		</form>
	);
};

export default UserProfile;
