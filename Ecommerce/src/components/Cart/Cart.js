import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const cartElements = [
	{
		title: "Colors",
		price: 100,
		imageUrl:
			"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

		quantity: 2,
	},
	{
		title: "Black and white Colors",
		price: 50,
		imageUrl:
			"https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
		quantity: 3,
	},

	{
		title: "Yellow and Black Colors",
		price: 70,
		imageUrl:
			"https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
		quantity: 1,
	},
];

const Cart = (props) => {
	return (
		<section className={classes.cart}>
			<h2>CART</h2>
			<button className={classes.cancel} onClick={props.onClose}>x</button>
			<div className={classes["cart-header"]}>
				<span className={classes["cart-item"]}>ITEM</span>
				<span>PRICE</span>
				<span>QUANTITY</span>
			</div>
			{cartElements.map((cart) => {
				return <CartItem items={cart} />;
			})}
		</section>
	);
};

export default Cart;
