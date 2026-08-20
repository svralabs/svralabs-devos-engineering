import React from 'react';

export default function TableCell({ children, header = false, className = '', ...props }) {
  const baseClasses = header
    ? 'px-4 py-3 font-label-sm text-mist/40 uppercase'
    : 'px-4 py-2 font-medium text-mist';

  return (
    <td className={`${baseClasses} ${className}`} {...props}>
      {children}
    </td>
  );
}
