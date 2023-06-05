import Form from "./components/Form";
import Items from "./components/Items";
import { useState } from "react";
import Cart from "./components/Cart";
import "./App.css";
const App = () => {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [totalValue, setTotalValue] = useState(0);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const addItem = (item) => {
		setItems([...items, item]);
    fetch(
      `https://crudcrud.com/api/4987f01b521341b381fbd045d93e5f84/Item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
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
				<Items items={items} addToCart={addToCart} />
			</div>
		</div>
	);
};

export default App;
