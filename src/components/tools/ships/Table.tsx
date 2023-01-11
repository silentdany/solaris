/* eslint-disable react/jsx-key */
import React from 'react';

import { BiDownArrow } from 'react-icons/bi';
import {
  useSortBy,
  useTable,
  useExpanded,
  useFilters,
  useGlobalFilter,
} from 'react-table';

import { SubComponent } from './SubComponent';

export const Table = ({ columns: userColumns, data, header }) => {
  const tableInstance = useTable(
    { columns: userColumns, data },
    useFilters,
    useGlobalFilter,
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
      className={`group pb-4 font-title lg:text-xl 
                ${index === 0 && 'w-2/6'}

                `}
    >
      {column.render('Header')}
      {column.Header !== 'Infos' && (
        <BiDownArrow
          className={`w-full duration-100 ease-in-out group-hover:text-primary-500 
            ${column.isSortedDesc ? 'rotate-0' : ''}
            ${
              column.isSorted && !column.isSortedDesc
                ? 'top-0 rotate-180'
                : '-rotate-90'
            }
            `}
        />
      )}
    </th>
  );

  const buildTableData = (row, cell, index) => (
    <td
      {...cell.getCellProps()}
      className={`h-16 p-1 text-center text-xs lg:h-32 lg:p-8 lg:text-base
                  ${index !== 0 && 'tr-cell'} 
                  ${index === 0 && 'rounded-l-xl'} 
                  ${index === row.cells.length - 1 && 'rounded-r-xl'}
                  `}
    >
      {cell.render('Cell')}
    </td>
  );

  const renderRowSubComponent = React.useCallback(
    ({ row }) => <SubComponent row={row} />,
    []
  );

  return (
    <>
      {header?.(tableInstance)}
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
                    background: `linear-gradient(to right, transparent, #F2E9D3 35%, #F2E9D3 40%, transparent), no-repeat left/50% url(${row.original.image})`,
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
    </>
  );
};
