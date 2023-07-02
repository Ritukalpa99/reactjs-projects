import React, { useState, useEffect } from "react";
import {
	MDBTable,
	MDBTableHead,
	MDBTableBody,
	MDBContainer,
	MDBCard,
	MDBCardBody,
} from "mdb-react-ui-kit";
import axios from "axios";
export default function Sent() {
	const [trigger, settrigger] = useState(false);
	const usehttp = (url, myfun) => {
		const fetch = async () => {
			const data = await axios.get(url);
			const respose = await data.data;

			myfun(respose);
		};
		return fetch;
	};

	const deleteMailHabdler = async (id) => {
		await axios.delete(
			`https://mailbox-client-b17b9-default-rtdb.firebaseio.com/${SenderEmail}/sent/${id}.json`
		);
		settrigger(!trigger);
	};

	let SenderEmail = localStorage.getItem("user");
	if (SenderEmail !== null) {
		SenderEmail = SenderEmail.replace("@", "").replace(".", "");
	}
	const [outbox, setoutbox] = useState([]);
	const myfun = (respose) => {
		const trasformData = [];
		for (const key in respose) {
			trasformData.push({
				id: key,
				msg: respose[key].msg,
				subject: respose[key].subject,
				to: respose[key].to,
				from: localStorage.getItem("user"),
			});
			setoutbox(trasformData);
		}
	};
	const fetch = usehttp(
		`https://mailbox-client-b17b9-default-rtdb.firebaseio.com/${SenderEmail}/sent.json`,
		myfun
	);
	useEffect(() => {
		fetch();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [trigger]);

	return (
		<>
			<MDBContainer fluid sm>
				<MDBCard>
					<MDBCardBody>
						<h3 style={{ textAlign: "center" }}>Sent Email</h3>
						<MDBTable hover>
							<MDBTableHead dark>
								<tr>
									<th scope="col">#</th>
									<th scope="col">From :</th>
									<th scope="col">To :</th>
									<th scope="col">Subject</th>
									<th scope="col">Message</th>
									<th scope="col"></th>
								</tr>
							</MDBTableHead>
							{outbox.map((i, index) => {
								let newmsg = "";
								if (i.msg !== undefined) {
									newmsg = i.msg;
								}
								return (
									<MDBTableBody>
										<tr>
											<th scope="row">{index + 1}</th>
											<td>{i.from}</td>
											<td>{i.to}</td>
											<td>{i.subject}</td>
											<td>
												{newmsg.slice(0, 45) + "..."}
											</td>

											<td>
												{
													<button
														className="btn btn-danger"
														onClick={() => {
															deleteMailHabdler(
																i.id
															);
														}}
													>
														Delete
													</button>
												}
											</td>
										</tr>
									</MDBTableBody>
								);
							})}
						</MDBTable>
					</MDBCardBody>
				</MDBCard>
			</MDBContainer>
		</>
	);
}
