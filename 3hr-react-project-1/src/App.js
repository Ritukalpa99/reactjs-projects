import { useState } from "react";
import FormInput from "./component/FormInput";
import Display from "./component/Display";

function App() {
  const [items, setItems] = useState([])

  const saveItemsHandler = (itemsData) => {
    setItems((prevData) => {
      return [...prevData, itemsData];
    })
  }

  const handleDelete = (ID) => {
    setItems((prev) => {
      return prev.filter((e) => e.id !== ID)
    })
  }
  return (
    <>
      <FormInput onSaveItemsData={saveItemsHandler}/>
      <Display items={items} onDelete={handleDelete}/> 
      
    </>
  );
}

export default App;
