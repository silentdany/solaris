/* eslint-disable react/jsx-key */
import { BiDownArrow } from 'react-icons/bi';
import { useSortBy, useTable } from 'react-table';

export const Table = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      {...getTableProps()}
      className="w-full max-w-6xl table-fixed border-separate border-spacing-y-4"
    >
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={`group pb-4 font-title text-xl ${
                  index === 0 && 'w-2/5'
                }`}
              >
                {column.render('Header')}
                <BiDownArrow
                  className={`w-full -rotate-90 duration-100 ease-in-out group-hover:text-primary-500
                  ${column.isSortedDesc && 'rotate-0'}
                  ${column.isSorted && 'rotate-180'} 
                  `}
                />
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any = {}) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="glass relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-x-8 hover:shadow-lg"
              style={{
                background: `linear-gradient(to right, transparent, #F2E9D3 35%, #F2E9D3 40%, transparent), no-repeat left/39% url(${row.original.image})`,
              }}
            >
              {row.cells.map((cell, index) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={`h-32 p-8 text-center
                  ${index !== 0 && 'tr-cell'} 
                  ${index === 0 && 'rounded-l-xl'} 
                  ${index === row.cells.length - 1 && 'rounded-r-xl'}`}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};