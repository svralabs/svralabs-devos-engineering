import React from 'react';

export default function TableRow({ children, className = '', ...props }) {
  return (
    <tr className={`hover:bg-mist/5 transition-colors group ${className}`} {...props}>
      {children}
    </tr>
  );
}
