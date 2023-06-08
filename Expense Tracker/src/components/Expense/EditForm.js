import Modal from "../layout/Modal/Modal";
import ExpenseInputForm from "./ExpenseInputForm";
import classes from "../Auth/ForgotPassword.module.css"
const EditForm = (props) => {

    const closeModal = () => {
		props.onModalClose();
	};

    return <Modal>
        <span className={classes.close} onClick={closeModal}>
				&times;
		</span>
        <div style={{display : 'flex', flexDirection:'row'}}>
            <ExpenseInputForm />
        </div>
    </Modal>
}

export default EditForm;