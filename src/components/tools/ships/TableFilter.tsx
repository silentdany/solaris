import React from 'react';

const TableFilter = ({ setGlobalFilter }) => {
  return (
    <input
      onChange={(e) => {
        setGlobalFilter(e.target.value);
      }}
      autoFocus
      placeholder="Recherche"
      className="h-14 w-full rounded-t-xl border-b-4 border-b-primary-500 bg-primary-500/5 px-4 text-center text-xl placeholder:text-slate-500/20 focus:border-b-secondary-300 focus:bg-primary-500/10 focus:outline-none md:h-20 md:text-3xl"
    />
  );
};

export default TableFilter;
