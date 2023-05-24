const Items = ({ items, addToCart }) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.name} - Description: {item.description} - Price: ₹{item.price}
            <button onClick={() => addToCart(item.name, item.price, 1)}>Add 1</button>
            <button onClick={() => addToCart(item.name, item.price, 2)}>Add 2</button>
            <button onClick={() => addToCart(item.name, item.price, 3)}>Add 3</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Items;
  