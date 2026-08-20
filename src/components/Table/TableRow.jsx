import React from 'react';
import TableCell from './TableCell';

export default function TableRow({ row, columns }) {
  return (
    <tr className="hover:bg-mist/5 transition-colors group">
      {columns.map((column) => (
        <TableCell key={column.key} value={row[column.key]} column={column} />
      ))}
    </tr>
  );
}
