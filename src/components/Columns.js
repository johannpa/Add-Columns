import React, { useState } from 'react';


function Columns() {
    //This state holds the columns of the layout
    const [columns, setColumns] = useState([{id:1 , name: 'column 1'}]);
    
    //Add a new column
    //This function is called when the user clicks the "Add Column" button
    const addColumn = () => {
        const newColumns = [...columns];
        newColumns.push({
            id: newColumns.length + 1,
            name:`Column ${newColumns.length + 1}`,
        });
        setColumns(newColumns);
    };
  return (
    <div style={{ padding:30 }}>
      {/* This button is used to add new columns */}
      <button onClick={addColumn} style={{ padding: '10px 30px' }}>
        Add Column
      </button>

      <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 30,
        }}
      >

      {/* Render the columns */}
      {
        columns.map(column => (
            <div
                key={column.id}
                style={{
                    //Divide the width equally
                    width:`calc(100% / ${columns.length})`,
                    height: 300,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#3f51b5',
                    // The more columns, the smaller the font size
                    fontSize: `calc(60px / ${columns.length})`,
                    color: '#fff',
                    border:'1px solid #ccc',
                    borderRadius: 5,
                }}
            >
                <h5>{column.name}</h5>
            </div>
        ))
      }

      </div>
    </div>
  )
}

export default Columns;
