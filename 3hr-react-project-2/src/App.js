import Form from "./component/Form";
import Items from "./component/Items";
import { useState } from "react";
import Cart from "./component/Cart";
import "./App.css"
const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const addToCart = (name, price, quantity) => {
    setCartItems([...cartItems, { name, price, quantity }]);
    setTotalValue(totalValue + price * quantity);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const quantity = cartItems.reduce((acc, init) => acc + init.quantity, 0);
  return (
    <div className="App">
    <div className="upper">
      <Form addItem={addItem} />
      <button onClick={openCart}>Open Cart</button>
      <span>{quantity}</span>
      {isCartOpen && (
          <Cart
          cartItems={cartItems}
          totalValue={totalValue}
          closeCart={closeCart}
          />
          )}
        </div>
        <div className="lower">
        <Items items={items} addToCart={addToCart}/>
        </div>
    </div>
  );
};

export default App;
