import React from 'react';

export default function SortableHeader({ column, sortConfig, onSort }) {
  const isActive = sortConfig.key === column.key;
  const direction = isActive ? sortConfig.direction : 'asc';

  return (
    <button
      onClick={() => onSort(column.key)}
      className={`flex items-center gap-1 ${column.align === 'center' ? 'justify-center' : column.align === 'right' ? 'justify-end' : ''}`}
    >
      {column.label}
      {column.sortable && (
        <span className="material-symbols-outlined text-xs text-mist/40">
          {isActive ? (direction === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'swap_vert'}
        </span>
      )}
    </button>
  );
}
