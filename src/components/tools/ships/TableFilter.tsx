import React from 'react';

const TableFilter = ({ setGlobalFilter }) => {
  return (
    <div className="group-search-box">
      <input
        onChange={(e) => {
          setGlobalFilter(e.target.value);
        }}
        autoFocus
        placeholder="Recherche"
        className="h-14 w-full rounded-t-xl bg-primary-500/5 px-4 text-center text-xl placeholder:text-slate-500/20 focus:bg-primary-500/10 focus:outline-none md:h-20 md:text-3xl"
      />
      <div className="relative h-1 w-full overflow-hidden">
        <span className="-z-1 absolute top-0 left-0 h-full w-full bg-primary-500"></span>
        <span className="-z-1 absolute top-0 left-0 h-full w-full -skew-x-[40deg] scale-0 bg-secondary-300 transition-all duration-300 ease-out group-search-box-focus-within:scale-105 group-search-box-hover:scale-105"></span>
      </div>
    </div>
  );
};

export default TableFilter;
