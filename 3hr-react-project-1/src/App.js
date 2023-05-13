import { useState } from "react";
import FormInput from "./component/FormInput";
import Display from "./component/Display";
const DUMMY_DATA = [
  {
    id: 1,
    price: 1042,
    dish: "Chicken Butter",
    table: "Table 1",
  },
  {
    id: 2,
    price: 500,
    dish: "Chilli Paneer",
    table: "Table 2",
  },
  {
    id: 3,
    price: 500,
    dish: "Bharwa Bhindi",
    table: "Table 1",
  },
  {
    id: 4,
    price: 500,
    dish: "Kulche",
    table: "Table 2",
  },
  {
    id: 5,
    price: 500,
    dish: "Aloo Parantha",
    table: "Table 2",
  },
  {
    id: 6,
    price: 500,
    dish: "Gatte saag",
    table: "Table 2",
  },
  {
    id: 7,
    price: 500,
    dish: "Masala Dosa",
    table: "Table 1",
  },
  {
    id: 8,
    price: 500, 
    dish: "Momo",
    table: "Table 3",
  },
  {
    id: 9,
    price: 500,
    dish: "Kaju Katli",
    table: "Table 2",
  },
  {
    id: 10,
    price: 500,
    dish: "Hyderabadi Biryani",
    table: "Table 3",
  },
];
function App() {
  const [items, setItems] = useState([])
  const saveItemsHandler = (itemsData) => {
    console.log("Triggere");
    setItems((prevData) => {
      return [...prevData, itemsData];
    })
    console.log(items);
  }
  return (
    <>
      <h1>It's Working</h1>
      <FormInput onSaveItemsData={saveItemsHandler}/>
      <Display items={items} />
    </>
  );
}

export default App;
