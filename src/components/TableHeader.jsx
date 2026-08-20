import React from 'react';

export default function TableHeader({ children, className = '', ...props }) {
  return (
    <thead className={`bg-ink-soft border-b border-mist/10 ${className}`} {...props}>
      <tr>
        {children}
      </tr>
    </thead>
  );
}
