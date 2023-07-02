import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";

import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
export default function MailDetails() {
  const myid = useParams();

  const mail = useSelector((state) => state.Mail.Mail);

  let indxOfItem = mail.findIndex((i) => i.id === myid.id);
  let maildetails;

  if (indxOfItem !== -1) {
    maildetails = mail[indxOfItem];
  }

  return (
    <>
      <div className="container">
        <MDBCard shadow="0" border="dark" background="white">
          <MDBCardHeader>
            From: <strong>{maildetails.from}</strong>
          </MDBCardHeader>
          <MDBCardHeader>
            Subject : <strong>{maildetails.subject}</strong>
          </MDBCardHeader>
          <MDBCardBody className="text-dark">
            <MDBCardTitle>Message</MDBCardTitle>
            <MDBCardText>{maildetails.msg}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <button className="btn btn-info">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}
