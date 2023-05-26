import classes from "./CartItem.module.css";

const CartItem = (props) => {
    return <div className={classes['cart-row']}>
        <span className={classes['cart-item']}>
            <img className={classes['cart-img']} src={props.items.imageUrl} alt="some"/>
            <span className={classes['cart-img-title']}>{props.items.title}</span>
        </span>
        <span className={classes['cart-price']}>{props.items.price}</span>
        <span className={classes['cart-form']}>
            <input type="number"/>
            <button>Remove</button>
        </span>
    </div>
}

export default CartItem;