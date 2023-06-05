import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import CartContext from "../../store/cart-context";
const Nav = (props) => {
	const authCtx = useContext(AuthContext);
	const cartCtx = useContext(CartContext)
	const [itemsCount, setItemsCount] = useState(0);

	const getCartItem = async () => {
		const id = localStorage
			.getItem("user")
			.replace(".com", "")
			.replace("@", "at");
		try {
			const res = await axios.get(
				`https://crudcrud.com/api/f997604892ef4cd18befc00c808423ef/cart${id}`
			);
			const uniqueTitles = [];

			const filteredData = await res.data.filter((item) => {
				if (!uniqueTitles.includes(item.title)) {
					uniqueTitles.push(item.title);
					return true;
				}
				return false;
			});
			setItemsCount(filteredData.length);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		// alert('items changes')
		console.log('items changed');
		getCartItem();
	}, [authCtx.isLoggedIn,cartCtx.cartItems]);

	return (
		<ul className={classes["nav-list"]}>
			<li>
				{/* <a href="/">Home</a> */}
				<NavLink to="/home">HOME</NavLink>
				{/* <Link to="/">HOME</Link> */}
			</li>
			<li>
				{/* <a href="/store">Home</a> */}
				<NavLink to="/">STORE</NavLink>
				{/* <Link to="/store">STORE</Link> */}
			</li>
			<li>
				{/* <a href="/about">Home</a> */}
				<NavLink to="/about">ABOUT</NavLink>
				{/* <Link href="/about">ABOUT</Link> */}
			</li>
			<li>
				{!authCtx.isLoggedIn && <NavLink to="/login">LOGIN</NavLink>}
				{authCtx.isLoggedIn && <NavLink to="/logout">LOGOUT</NavLink>}
			</li>
			<li>
				<NavLink to="/contact">CONTACT US</NavLink>
			</li>
			{authCtx.isLoggedIn && (
				<div className={classes["cart-holder"]} onClick={props.onClick}>
					<div>Cart</div>
					<span>{itemsCount}</span>
				</div>
			)}
		</ul>
	);
};

export default Nav;
