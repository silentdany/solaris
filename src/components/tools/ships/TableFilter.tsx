import React from 'react';

const TableFilter = ({ setGlobalFilter }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <input
        onChange={(e) => {
          setGlobalFilter(e.target.value);
        }}
        placeholder="Filter outside table"
      />
    </div>
  );
};

export default TableFilter;
