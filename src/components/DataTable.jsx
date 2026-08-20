import React from 'react';

export default function DataTable({ columns, data, renderHeader, renderCell }) {
  return (
    <table className="w-full text-left border-collapse zebra-stripe">
      <thead className="bg-ink-soft border-b border-mist/10">
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className={`px-4 py-3 font-label-sm text-mist/40 uppercase ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : ''}`}
            >
              {renderHeader ? renderHeader(column) : column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-xs font-light divide-y divide-mist/5">
        {data.map((item, index) => (
          <tr key={index} className="hover:bg-mist/5 transition-colors group">
            {columns.map((column) => (
              <td
                key={column.key}
                className={`px-4 py-2 ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'font-medium text-mist'}`}
              >
                {renderCell ? renderCell(item, column) : item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
