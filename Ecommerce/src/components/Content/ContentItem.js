import classes from "./ContentItem.module.css"
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
const ContentItem = (props) => {
    const cartCtx = useContext(CartContext)

    const handleAddToCart = (item) => {
        cartCtx.addToCart(item);
    }

	return (
		<div className={classes.container}>
			<h3>{props.item.title}</h3>
            <Link to={`/product-detail/${props.item.title}`}>
            <div className={classes['image-container']}>
                <img className={classes.image} src={props.item.imageUrl} alt="some"/>
            </div>
            </Link>
            <div className={classes['product-details']}>
                <span>
                    $ 
                    <span>{props.item.price}</span>
                </span>
                <button onClick={() => handleAddToCart(props.item)}>ADD TO CART</button>
            </div>
		</div>
	);
};

export default ContentItem;
