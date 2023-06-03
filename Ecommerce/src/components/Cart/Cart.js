import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";


const Cart= (props) => {
	const cartCtx = useContext(CartContext);
	const authCtx = useContext(AuthContext)
	const handleRemoveFromcart = (id) => {
		cartCtx.removeFromCart(id);
	}

	return (
		<section className={classes.cart}>
			<h2>CART</h2>
			<button className={classes.cancel} onClick={props.onClose}>
				x
			</button>
			<div className={classes["cart-header"]}>
				<span className={classes["cart-item"]}>ITEM</span>
				<span>PRICE</span>
				<span>QUANTITY</span>
			</div>
			{authCtx.isLoggedIn && <p>Welcome back {localStorage.getItem('user')}</p>}
			{cartCtx.cartItems.length === 0 ? (
				<p>Cart is empty</p>
			) : (
				cartCtx.cartItems.map((cart,index) => {
					return <CartItem key={index} items={cart} index={index} handleDeleteCart={handleRemoveFromcart}/>;
				})
			)}
		</section>
	);
};

export default Cart;
