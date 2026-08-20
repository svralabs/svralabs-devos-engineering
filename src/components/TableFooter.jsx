import React from 'react';

export default function TableFooter({ children, className = '', ...props }) {
  return (
    <tfoot className={`bg-ink-soft border-t border-mist/10 ${className}`} {...props}>
      <tr>
        {children}
      </tr>
    </tfoot>
  );
}
