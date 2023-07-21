import React, { useState, useEffect } from "react";
import classes from "./composeMail.module.css"
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { MailActions } from "../../store/mailSlice";
import { useNavigate } from "react-router-dom";

export default function Inbox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const outbox = useSelector((state) => state.Mail.Mail);
  const [trigger, settrigger] = useState(false);
  let SenderEmail = localStorage.getItem("user");
  if (SenderEmail !== null) {
    SenderEmail = SenderEmail.replace("@", "").replace(".", "");
  }
  const usehttp = (url, myfun) => {
    const fetch = async () => {
      const data = await axios.get(url);
      const respose = await data.data;
  
      myfun(respose);
    };
    return fetch;
  };
  
  const viewMailHandler = async (myid) => {
    try {
      const res = await axios.patch(
        `https://mailbox-client-b17b9-default-rtdb.firebaseio.com/${SenderEmail}/inbox/${myid}.json`,
        { read: true }
      );
      if (res.status === 200) {
        settrigger(!trigger);
        navigate(`/MailDetails/${myid}`);
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteMailHabdler = async (id) => {
    await axios.delete(
      `https://mailbox-client-b17b9-default-rtdb.firebaseio.com/${SenderEmail}/inbox/${id}.json`
    );
    settrigger(!trigger);
  };

  const datatransformfunction = (respose) => {
    const trasformData = [];
    for (const key in respose) {
      trasformData.push({
        id: key,
        read: respose[key].read,
        msg: respose[key].msg,
        subject: respose[key].subject,
        to: respose[key].to,
        from: respose[key].from,
      });
    }
    dispatch(MailActions.onSendMail(trasformData));
  };
  const callData = usehttp(
    `https://mailbox-client-b17b9-default-rtdb.firebaseio.com/${SenderEmail}/inbox.json`,
    datatransformfunction
  );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     callData();
  //   }, 2000);
  
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [dispatch, trigger]);
  
  useEffect(() => {
    callData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, trigger]);

  return (
    <MDBContainer fluid sm>
      <MDBCard>
        <MDBCardBody>
          <h3 style={{ textAlign: "center" }}>Inbox</h3>
          <MDBTable hover>
            <MDBTableHead dark>
              <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col">From :</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </MDBTableHead>
            {outbox.map((i, index) => {
              const newmsg = i.msg;
              return (
                <MDBTableBody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{i.read ? "" : <span className={classes.dot}></span>}</td>
                    <td>{i.from}</td>
                    <td>{i.subject}</td>
                    <td>{newmsg.slice(0, 45) + "..."}</td>
                    <td>
                      {" "}
                      <button
                      className="btn btn-info"
                        onClick={() => {
                          viewMailHandler(i.id);
                        }}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      {
                        <button
                          className="btn btn-danger"
                          color="danger"
                          onClick={() => deleteMailHabdler(i.id)}
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
  );
}
