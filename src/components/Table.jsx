import React from 'react';

export default function Table({ children, className = '', ...props }) {
  return (
    <table className={`w-full text-left border-collapse zebra-stripe ${className}`} {...props}>
      {children}
    </table>
  );
}
