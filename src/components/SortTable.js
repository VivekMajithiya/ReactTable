import React from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS, GROUPED_COLUMNS } from './columns';
import './Table.css';
import GlobalFilterInput from './GlobalFilterInput';

const SortTable = () => {
    const columns = React.useMemo(() => COLUMNS,[])
    const data = React.useMemo(() => MOCK_DATA,[])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        setGlobalFilter,
        prepareRow,
      } = useTable(
        {
          columns,
          data,
        },
        useFilters,
        useGlobalFilter,
        useSortBy
      )

      const { globalFilter } = state
    //   console.log(rows)
    return(
      <>
      <GlobalFilterInput filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th>
                 <div {...column.getHeaderProps(column.getSortByToggleProps())}>
                 {column.render('Header')}
                 <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                 </div>                 
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td className={cell['column']['Header'] === 'Id' ? (+cell.value > 5 ? 'Bold': 'Italic' ) : ''}
                     {...cell.getCellProps()}
                   > 
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     </>
    )
}

export default SortTable;