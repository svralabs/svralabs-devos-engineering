import React from 'react';

export default function TableCell({ value, column }) {
  const renderCellContent = () => {
    if (column.render) {
      return column.render(value);
    }

    if (column.type === 'status') {
      return (
        <span className={`flex items-center gap-1.5 text-${value.color}`}>
          <span className={`w-1.5 h-1.5 bg-${value.color} rounded-full animate-pulse`}></span>
          {value.text}
        </span>
      );
    }

    if (column.type === 'progress') {
      return (
        <div className="w-16 h-1 bg-mist/10 rounded-full mx-auto overflow-hidden">
          <div className={`h-full bg-${value.color}`} style={{ width: `${value.percentage}%` }}></div>
        </div>
      );
    }

    return value;
  };

  return (
    <td className={`px-4 py-2 ${column.align ? `text-${column.align}` : ''}`}>
      {renderCellContent()}
    </td>
  );
}
