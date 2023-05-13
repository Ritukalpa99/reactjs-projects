import { useState } from "react";

const FormInput = (props) => {

    const [Uid, setUID] = useState("");
    const [price, setPrice] = useState("");
    const [dish, setDish] = useState("");
    const [table, setTable] = useState("");

    const uidHandler = (e) => {
        setUID(e.target.value);
    }
    const priceHandler = (e) => {
        setPrice(e.target.value)
    }
    const dishHandler = (e) => {
        setDish(e.target.value)
    }
    const tableHandler = (e) => {
        setTable(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const itemDets = {
            id : Uid,
            price : price,
            dish : dish,
            table : table
        }
        props.onSaveItemsData(itemDets);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="id">Unqiue Order Id :</label>
            <input id="id" type="number" onChange={uidHandler}/>
            <label htmlFor="price">Choose Price</label>
            <input id="price" type="number"  onChange={priceHandler}/>
            <label htmlFor="dish">Choose Dish</label>
            <input id="dish" type="text"  onChange={dishHandler}/>
            <label htmlFor="table">Choose a table</label>
            <select id="table"  onChange={tableHandler}>
                <option value="Table 1">Table 1</option>
                <option value="Table 2">Table 2</option>
                <option value="Table 3">Table 3</option>
            </select>

            <button type="submit">Add to Bill</button>
        </form>
    )
}

export default FormInput;