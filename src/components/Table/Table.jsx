import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TablePagination from './TablePagination';

export default function Table({ columns, data, itemsPerPage = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-sm ring-1 ring-outline-variant/20 rounded-lg">
            <table className="min-w-full divide-y divide-outline-variant/10">
              <TableHeader columns={columns} />
              <tbody className="bg-surface divide-y divide-outline-variant/10">
                {paginatedData.map((row, index) => (
                  <TableRow key={index} row={row} columns={columns} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
