/* eslint-disable react/jsx-key */
import React from 'react';

import { BiDownArrow } from 'react-icons/bi';
import { Portal } from 'react-portal';
import { useSortBy, useTable, useExpanded } from 'react-table';

export const Table = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data }, useSortBy, useExpanded);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const buildTableHeader = (column, index) => (
    <th
      {...column.getHeaderProps(column.getSortByToggleProps())}
      className={`group pb-4 font-title text-xl 
                ${index === 0 && 'w-2/6'}

                `}
    >
      {column.render('Header')}
      <BiDownArrow
        className={`w-full -rotate-90 duration-100 ease-in-out group-hover:text-primary-500
                  ${column.isSortedDesc && 'rotate-0'}
                  ${column.isSorted && 'top-0 rotate-180'} 
                  `}
      />
    </th>
  );

  const buildTableData = (row, cell, index) => (
    <td
      {...cell.getCellProps()}
      className={`h-32 p-8 text-center
                  ${index !== 0 && index < 5 && 'tr-cell'} 
                  ${index === 0 && 'rounded-l-xl'} 
                  ${index === row.cells.length - 1 && 'rounded-r-xl'}
                  `}
    >
      {cell.render('Cell')}
    </td>
  );

  return (
    <table
      {...getTableProps()}
      className="w-full max-w-6xl table-fixed border-separate border-spacing-y-4"
    >
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => {
                if (index < 5) return buildTableHeader(column, index);
                if (index >= 5)
                  return (
                    <Portal
                      node={document && document.getElementById('tr-portal')}
                    >
                      {buildTableHeader(column, index)}
                    </Portal>
                  );
                return null;
              })}
            </tr>
            <div id="tr-portal"></div>
          </>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any = {}) => {
          prepareRow(row);
          return (
            <React.Fragment {...row.getRowProps()}>
              <tr
                className="glass relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(to right, transparent, #F2E9D3 35%, #F2E9D3 40%, transparent), no-repeat left/39% url(${row.original.image})`,
                }}
              >
                {row.cells.map((cell, index) => {
                  if (index < 5) return buildTableData(row, cell, index);
                  if (
                    index >= 5 &&
                    document &&
                    document.getElementById(`td-portal-${row.id}`)
                  )
                    return (
                      <Portal
                        node={
                          document &&
                          document.getElementById(`td-portal-${row.id}`)
                        }
                      >
                        {buildTableData(row, cell, index)}
                      </Portal>
                    );
                  return null;
                })}
              </tr>
              {row.isExpanded && (
                <div
                  id={`td-portal-${row.id}`}
                  className="portal glass min-h-16 rounded-xl p-4"
                >
                  ola
                </div>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};
