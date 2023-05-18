const Display = (props) => {
  const tables = ["Table 1", "Table 2", "Table 3"];

  const groupedTables = {};
  
    tables.forEach((table) => {
      const categoryTables = props.items.filter((tab) => tab.table === table);
      groupedTables[table] = categoryTables;
    });
  
  
  // console.log(groupedTables);

  return (
    <>
      <h2> Orders</h2>
      {tables.map((table) => {
        return (
          <div key={table}>
            <h3>{table}</h3>
            <ul>
              {groupedTables[table].map((item) => {
                return (
                  <li key={item.id}>
                    {item.price} -- {item.dish} -- {item.table}
                    <button onClick={() => props.onDelete(item.id)}>del</button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Display;
