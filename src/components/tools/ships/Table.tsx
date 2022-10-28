/* eslint-disable react/jsx-key */
import React from 'react';

import { BiDownArrow } from 'react-icons/bi';
import { useSortBy, useTable, useExpanded } from 'react-table';

export const Table = ({ columns: userColumns, data, subRow }) => {
  const tableInstance = useTable(
    { columns: userColumns, data },
    useSortBy,
    useExpanded
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = tableInstance;

  const buildTableHeader = (column, index) => (
    <th
      {...column.getHeaderProps(column.getSortByToggleProps())}
      className={`group pb-4 font-title text-xl 
                ${index === 0 && 'w-2/6'}

                `}
    >
      {column.render('Header')}
      {column.Header !== 'Infos' && (
        <BiDownArrow
          className={`w-full -rotate-90 duration-100 ease-in-out group-hover:text-primary-500
        ${column.isSortedDesc && 'rotate-0'}
        ${column.isSorted && 'top-0 rotate-180'} 
        `}
        />
      )}
    </th>
  );

  const buildTableData = (row, cell, index) => (
    <td
      {...cell.getCellProps()}
      className={`h-32 p-8 text-center
                  ${index !== 0 && 'tr-cell'} 
                  ${index === 0 && 'rounded-l-xl'} 
                  ${index === row.cells.length - 1 && 'rounded-r-xl'}
                  `}
    >
      {cell.render('Cell')}
    </td>
  );

  const renderRowSubComponent = React.useCallback(
    subRow === 'infos'
      ? ({ row }) => (
          <div className="flex p-4">
            <div className="flex w-full flex-col">
              <h4 className="mb-8 font-title text-2xl">Equipage</h4>
              {row.original.crewSlots.map((crewSlot: any, index: number) => (
                <span key={index}>
                  {crewSlot.quantity} {crewSlot.type}
                </span>
              ))}
            </div>
            <div className="flex w-full flex-col">
              <h4 className="mb-8 font-title text-2xl">Composants</h4>
              {row.original.componentSlots.map(
                (componentSlot: any, index: number) => (
                  <span key={index}>
                    {componentSlot.quantity} {componentSlot.type}
                  </span>
                )
              )}
            </div>
            <div className="flex w-full flex-col">
              <h4 className="mb-8 font-title text-2xl">Modules</h4>
              {row.original.moduleSlots.map(
                (moduleSlot: any, index: number) => (
                  <span key={index}>
                    {moduleSlot.quantity} {moduleSlot.type}
                  </span>
                )
              )}
            </div>
          </div>
        )
      : () => <div className="flex p-4">ola</div>,
    []
  );

  return (
    <table
      {...getTableProps()}
      className="w-full max-w-6xl table-fixed border-separate border-spacing-y-4"
    >
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => {
              return buildTableHeader(column, index);
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any = {}) => {
          prepareRow(row);
          return (
            <React.Fragment key={row.getRowProps().key}>
              <tr
                className="glass relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(to right, transparent, #F2E9D3 35%, #F2E9D3 40%, transparent), no-repeat left/39% url(${row.original.image})`,
                }}
              >
                {row.cells.map((cell, index) => {
                  return buildTableData(row, cell, index);
                })}
              </tr>
              {row.isExpanded && (
                <tr className="glass relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg">
                  <td colSpan={visibleColumns.length}>
                    {renderRowSubComponent({ row })}
                  </td>
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};
