import React from 'react';

export default function TableHeader({ columns, onSort, sortConfig }) {
  return (
    <thead className="bg-ink-soft border-b border-mist/10">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            className={`px-4 py-3 font-label-sm text-mist/40 uppercase ${column.sortable ? 'cursor-pointer' : ''}`}
            onClick={() => column.sortable && onSort(column.key)}
          >
            <div className="flex items-center justify-between">
              {column.label}
              {column.sortable && (
                <span className="material-symbols-outlined text-sm">
                  {sortConfig.key === column.key ? (sortConfig.direction === 'ascending' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more'}
                </span>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
