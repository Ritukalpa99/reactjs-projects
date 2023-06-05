import "./Cart.css";

const Cart = ({ cartItems, totalValue, closeCart }) => {
	const groupedItems = cartItems.reduce((acc, item) => {
		const existingItem = acc.find((i) => i.name === item.name);
		if (existingItem) {
			existingItem.quantity += item.quantity;
		} else {
			acc.push({ ...item });

			fetch(
				`https://crudcrud.com/api/4987f01b521341b381fbd045d93e5f84/cart`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(item),
				}
			);
		}
		return acc;
	}, []);

	return (
		<div className="modal">
			<div className="modal-content">
				<span className="close" onClick={closeCart}>
					&times;
				</span>
				<h2>Cart</h2>
				<p>
					Total Amount: <span>₹{totalValue}</span>
				</p>
				{groupedItems.length === 0 ? (
					<p>No items selected.</p>
				) : (
					<>
						<ul>
							{groupedItems.map((item) => (
								<li key={item.name}>
									{item.name} - Quantity: {item.quantity},
									Price: ₹{item.price}
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		</div>
	);
};

export default Cart;