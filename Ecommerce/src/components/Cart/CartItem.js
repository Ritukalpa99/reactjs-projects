import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const idx = props.index
    const handleDelete = (id) => {
        props.handleDeleteCart(id);
    }
    return <div className={classes['cart-row']}>
        <span className={classes['cart-item']}>
            <img className={classes['cart-img']} src={props.items.imageUrl} alt="some"/>
            <span className={classes['cart-img-title']}>{props.items.title}</span>
        </span>
        <span className={classes['cart-price']}>{props.items.price}</span>
        <span className={classes['cart-form']}>
            <input type="number" min="1"></input>
            <button onClick={() => handleDelete(idx)}>Remove</button>
        </span>
    </div>
}

export default CartItem;