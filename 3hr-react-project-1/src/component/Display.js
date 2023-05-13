import { useState } from "react";

const Display = (props) => {
  const [itemDetails, setItemDetails] = useState(props.items);
  // console.log(table1);

  console.log("inside itemsDets" + itemDetails);
  const handleDelete = (ID) => {
    console.log(ID + "deleting");
    setItemDetails((prevData) => {
      return prevData.filter((e) => e.id !== ID)
    })
  };
  // const handleDelete1 = (ID) => {
  //   // console.log("delelte triggered", ID);
  //   setTable1((prevData) => {
  //     return prevData.filter((e) => e.id !== ID);
  //   });
  // };
  // const handleDelete2 = (ID) => {
  //   // console.log("delelte triggered", ID);
  //   setTable2((prevData) => {
  //     return prevData.filter((e) => e.id !== ID);
  //   });
  // };
  // const handleDelete3 = (ID) => {
  //   // console.log("delelte triggered", ID);
  //   setTable3((prevData) => {
  //     return prevData.filter((e) => e.id !== ID);
  //   });
  // };
  return (
    <>
      <h1>Orders</h1>
      <h2>Tab1</h2>
      {props.items
        .filter((e) => e.table === "Table 1")
        .map((e) => {
          return (
            
              <li key={e.id}>
                {e.dish} {e.id}
                <input
                  type="button"
                  onClick={() => handleDelete(e.id)}
                  value="del"
                />
              </li>
            
          );
        })}
      <h2>Tab2</h2>
      {props.items
        .filter((e) => e.table === "Table 2")
        .map((e) => {
          return (
           
              <li key={e.id}>
                {e.dish} {e.id}
                <input
                  type="button"
                  onClick={() => handleDelete(e.id)}
                  value="del"
                />
              </li>
          
          );
        })}
      <h2>Tab3</h2>
      {props.items
        .filter((e) => e.table === "Table 3")
        .map((e) => {
          return (
          
              <li key={e.id}>
                {e.dish} {e.id}
                <input
                  type="button"
                  onClick={() => handleDelete(e.id)}
                  value="del"
                />
              </li>
          
          );
        })}
      <h2>Table 1</h2>
      {/* {table1.map((e) => {
        return (
          <>
            <li>
              {e.name} {e.id}
              <input
                type="button"
                onClick={() => handleDelete1(e.id)}
                value="del"
              />
            </li>
          </>
        );
      })} */}
      <h2>Table 2</h2>
      {/* {table2.map((e) => {
        return (
          <>
            <li>
              {e.name} {e.id}
              <input
                type="button"
                onClick={() => handleDelete2(e.id)}
                value="del"
              />
            </li>
          </>
        );
      })} */}
      <h2>Table 3</h2>
      {/* {table3.map((e) => {
        return (
          <>
            <li>
              {e.name} {e.id}
              <input
                type="button"
                onClick={() => handleDelete3(e.id)}
                value="del"
              />
            </li>
          </>
        );
      })} */}
    </>
  );
};

export default Display;
