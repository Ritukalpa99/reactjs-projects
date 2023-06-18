import { useDispatch } from "react-redux";
import { themeActions } from "../../../store/themeSlice";
const Premium = () => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        // alert('clicked happened')
        dispatch(themeActions.toggleTheme())
    }

	return <button style={{color : "white", backgroundColor : "#76b5c5"}} onClick={handleToggle}>Active Premium</button>;
};

export default Premium;
