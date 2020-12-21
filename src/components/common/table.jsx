import React from 'react';
import TableBody from './tableBody';
import TaleHeader from './tableHeader';

const Table = ({columns, sortColumn, onSort, data}) => {

  return (
    <table className='table'>
      <TaleHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />

      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
