import React, {useState} from 'react'

const CartContext = React.createContext({
    cartItems : [],
    addToCart : (item) =>{},
    removeFromCart : (id)  => {}
});



export const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);

    }

    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems]
        updatedCartItems.splice(index,1);
        setCartItems(updatedCartItems);

    }
    
    return (<CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
        {props.children}
    </CartContext.Provider>)
}
export default CartContext;