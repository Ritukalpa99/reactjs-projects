import { Row } from "react-bootstrap";
import Content from "./components/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";

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
	return (
		<div>
			<Header />
             <Row className="justify-content-center">
            {productsArr.map((item) => {
                return <Content title={item.title} price={item.price} src={item.imageUrl}/>
            })}
            </Row>
			<Cart />
			<Footer />
		</div>
	);
};

export default App;
