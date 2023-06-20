import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import draftToMarkdown from "draftjs-to-markdown";
import classes from "./composeMail.module.css";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const ComposeMail = () => {
	const [editorState, setEditorState] = useState("");
	const [to, setTo] = useState("");
	const [subject, setSubject] = useState("");

	const handleToOnChange = (e) => {
		setTo(e.target.value);
	};

	const handleSubjectOnChange = (e) => {
		setSubject(e.target.value);
	};
	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        const content = draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
		alert(`${content}, ${to}, ${subject}`);
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
					onChange={handleToOnChange}
					required
				/>
				<label htmlFor="subject" className="form-label">
					Subject
				</label>
				<input
					type="text"
					id="subject"
					className="form-control"
					onChange={handleSubjectOnChange}
					required
				/>
				<div className={classes["form-outline"]}>
					<Editor
						wrapperClassName="demo-wrapper"
						editorClassName="demo-editor"
						onEditorStateChange={onEditorStateChange}
					/>
				</div>
				<button type="submit">Compose</button>
			</form>
		</div>
	);
};

export default ComposeMail;
