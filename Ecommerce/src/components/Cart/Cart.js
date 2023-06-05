import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const authCtx = useContext(AuthContext);
	const [cartDBItems, setCartDBItems] = useState([]);
	const [totalAmount, setTotalAmount] = useState(0);
	const handleRemoveFromcart = (id) => {
		cartCtx.removeFromCart(id);
	};

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

			const filteredData = res.data.filter((item) => {
				if (!uniqueTitles.includes(item.title)) {
					uniqueTitles.push(item.title);
					return true;
				}
				return false;
			});
			// let amt = 0;
			const amt = filteredData.reduce((acc,it) => acc + it.price,0)
			setCartDBItems([...filteredData]);
			setTotalAmount(amt);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getCartItem();
	}, [])
	return (
		<section className={classes.cart}>
			{authCtx.isLoggedIn && (
				<p className={classes.welcome}>
					Welcome back {localStorage.getItem("user")}
				</p>
			)}
			<h2>CART</h2>
			<button className={classes.cancel} onClick={props.onClose}>
				x
			</button>
			<div className={classes["cart-header"]}>
				<span className={classes["cart-item"]}>ITEM</span>
				<span>PRICE</span>
				<span>QUANTITY</span>
			</div>

			{/* {cartCtx.cartItems.length === 0 ? (
				<p>Cart is empty</p>
			) : (
				cartCtx.cartItems.map((cart,index) => {
					return <CartItem key={index} items={cart} index={index} handleDeleteCart={handleRemoveFromcart}/>;
				})
			)} */}
			{/* BACKEND SERVER - USER SPECIFIC CARt */}
			{cartDBItems && cartDBItems.length === 0 ? (
				<p>Cart is empty</p>
			) : (
				cartDBItems.map((cart, index) => {
					return (
						<CartItem
							key={index}
							items={cart}
							index={index}
							handleDeleteCart={handleRemoveFromcart}
						/>
					);
				})
			)}
			<div className={classes['cart-total']}>
				<span>
					<span className={classes['total-title']}>
						<strong>Total</strong>
					</span>
					$
					<span className={classes['total-value']}>{totalAmount}</span>
				</span>
			</div>
		</section>
	);
};

export default Cart;
