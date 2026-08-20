import React from 'react';
export default function List({ items = [], renderItem, emptyText = 'No items found', className = '' }) {
  if (!items || items.length === 0) return <div className="text-center py-8 text-slate-400 text-sm">{emptyText}</div>;
  return (
    <div className={`divide-y divide-slate-100 dark:divide-slate-800 ${className}`}>
      {items.map((item, idx) => (renderItem ? renderItem(item, idx) : <div key={idx} className="py-3">{String(item)}</div>))}
    </div>
  );
}