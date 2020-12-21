import React from 'react';
import TableBody from './tableBody';
import TaleHeader from './tableHeader';

const Table = props => {
  const {columns, sortColumn, onSort, data} = props;

  return (
    <table className='table'>
      <TaleHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />

      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
