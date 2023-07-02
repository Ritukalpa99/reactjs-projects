import { useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import classes from "./composeMail.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
const ComposeMail = () => {
	const email = useRef();
	const emailSubject = useRef();
	let emailMsg;

	const onEditorStateChange = (event) => {
		emailMsg = event.getCurrentContent().getPlainText();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		let receiverEmail = email.current.value;
		let senderEmail = localStorage.getItem("user");

		if (senderEmail !== null) {
			senderEmail = senderEmail.replace("@", "").replace(".", "");
		}
		if (receiverEmail !== null) {
			receiverEmail = receiverEmail.replace("@", "").replace(".", "");
		}

		const MailData = {
			to: email.current.value,
			subject: emailSubject.current.value,
			msg: emailMsg,
			read: false,
			from: localStorage.getItem("user"),
		};

		try {
			await axios.post(
				`https://mailbox-client-b17b9-default-rtdb.firebaseio.com/${receiverEmail}/inbox.json`,
				MailData
			);

			await axios.post(
				`https://mailbox-client-b17b9-default-rtdb.firebaseio.com/${senderEmail}/sent.json`,
				MailData
			);

			alert("Mail Sent Successfully");
			email.current.value = "";
			emailSubject.current.value = "";
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className={classes.form}>
			<h1>Compose your mail</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="to" className="form-label">
					To
				</label>
				<input
					id="to"
					type="email"
					className="form-control"
					ref={email}
					required
				/>
				<label htmlFor="subject" className="form-label">
					Subject
				</label>
				<input
					type="text"
					id="subject"
					className="form-control"
					ref={emailSubject}
					required
				/>
				<div className={classes["form-outline"]}>
					<Editor
						placeholder="Type your message here"
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="editorClassName"
						onEditorStateChange={onEditorStateChange}
					/>
				</div>
				<button className="btn btn-success" type="submit">Compose</button>
			</form>
		</div>
	);
};

export default ComposeMail;
