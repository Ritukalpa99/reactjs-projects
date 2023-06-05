import classes from "./ContentItem.module.css";
import { useContext } from "react";
import axios from "axios";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
const ContentItem = (props) => {
	const cartCtx = useContext(CartContext);

	const handleAddToCart = (item) => {
		const itemExist = cartCtx.cartItems.find(
			({ title }) => title === item.title
		);

		if (itemExist) {
			alert("Product already added to cart");
		} else {
			cartCtx.addToCart(item);
			updateServer(item);
		}
	};
	const updateServer = async (obj) => {
		const id = localStorage.getItem("user").replace('.com','').replace('@','at');
		try {
			await axios.post(
				`https://crudcrud.com/api/f997604892ef4cd18befc00c808423ef/cart${id}`,
				obj
			);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className={classes.container}>
			<h3>{props.item.title}</h3>
			<Link to={`/product-detail/${props.item.title}`}>
				<div className={classes["image-container"]}>
					<img
						className={classes.image}
						src={props.item.imageUrl}
						alt="some"
					/>
				</div>
			</Link>
			<div className={classes["product-details"]}>
				<span>
					$<span>{props.item.price}</span>
				</span>
				<button onClick={() => handleAddToCart(props.item)}>
					ADD TO CART
				</button>
			</div>
		</div>
	);
};

export default ContentItem;
