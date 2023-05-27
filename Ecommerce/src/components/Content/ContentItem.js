import classes from "./ContentItem.module.css"
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const ContentItem = (props) => {
    const cartCtx = useContext(CartContext)

    const handleAddToCart = (item) => {
        cartCtx.addToCart(item);
    }

	return (
		<div className={classes.container}>
			<h3>{props.item.title}</h3>
            <div className={classes['image-container']}>
                <img className={classes.image} src={props.item.imageUrl} alt="some"/>
            </div>
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
