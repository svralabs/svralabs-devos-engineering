import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import PaginationControls from './PaginationControls';

export default function TableContainer({ data, columns, onSort, sortConfig, currentPage, totalPages, onPageChange }) {
  return (
    <div className="overflow-x-auto glass-panel rounded-md">
      <table className="w-full text-left border-collapse zebra-stripe">
        <TableHeader columns={columns} onSort={onSort} sortConfig={sortConfig} />
        <tbody className="text-xs font-light divide-y divide-mist/5">
          {data.map((row, index) => (
            <TableRow key={index} row={row} columns={columns} />
          ))}
        </tbody>
      </table>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
