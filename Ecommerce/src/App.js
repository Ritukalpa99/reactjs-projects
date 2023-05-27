import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { CartProvider } from "./store/cart-context";
const productsArr = [
	{
		title: "Colors",
		price: 100,
		imageUrl:
			"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
	},
	{
		title: "Black and white Colors",
		price: 50,
		imageUrl:
			"https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
	},
	{
		title: "Yellow and Black Colors",
		price: 70,
		imageUrl:
			"https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
	},
	{
		title: "Blue Color",
		price: 100,
		imageUrl:
			"https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
	},
];

const App = () => {

	const [isCartOpen, setIsCartOpen] = useState(false);

	const showCartHandler = () => {
		setIsCartOpen(true);
	}

	const hideCartHandler = () => {
		setIsCartOpen(false);
	}
	return (
		<CartProvider>
			<Header onShowCart={showCartHandler}/>
			<Content items={productsArr}/>
			{ isCartOpen && <Cart onClose={hideCartHandler}/>}
			<Footer />
		</CartProvider>
	);
};

export default App;
