import classes from "./ContactUs.module.css"
import { useRef } from "react"
const ContactUs = () => {
    const nameRef = useRef("")
    const mailRef = useRef("")
    const numberRef = useRef("")
    return <form>
        <div className={classes.control}>
            <lable htmlFor='name'>Name</lable>
            <input type="text" id="name" ref={nameRef}/>
        </div>
        <div className={classes.control}>
            <lable htmlFor='mail'>E-Mail</lable>
            <input type="text" id="mail" ref={mailRef}/>
        </div>
        <div className={classes.control}>
            <lable htmlFor='number'>Phone Number</lable>
            <input type="text" id="number" ref={numberRef}/>
        </div>
        <button className={classes.submit}>Submit </button>
    </form>
}

export default ContactUs