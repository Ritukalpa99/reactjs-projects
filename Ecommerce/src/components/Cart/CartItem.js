import classes from "./CartItem.module.css";
import {useState } from 'react'
const CartItem = (props) => {
    const [amount, setAmount] = useState(1);
    const idx = props.index

    const handleChange = (event) => {
        setAmount(event.target.value)
    }
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
            <input type="number" min="1" onChange={handleChange} value={amount}/>
            <button onClick={() => handleDelete(idx)}>Remove</button>
        </span>
    </div>
}

export default CartItem;