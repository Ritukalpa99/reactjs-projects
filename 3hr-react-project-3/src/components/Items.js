import { useRef } from "react";
const Items = ({ items, addToCart }) => {

  const inputRef = useRef();
    return (
      <ul>
        {items.map((item) => (
          <li style={{'margin':'1em'}} key={item.name}>
            {item.name} - Description: {item.description} - Price: ₹{item.price}
            <input style={{'width':'150px'}} type="number" placeholder="Quantity" required ref={inputRef}/>
            <button onClick={() => addToCart(item.name, item.price, +inputRef.current.value)}>Add to cart</button>
            
          </li>
        ))}
      </ul>
    );
  };
  
  export default Items;
  