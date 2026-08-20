import React from 'react';
export default function Table({ headers = [], rows = [], className = '' }) {
  return (
    <div className={`overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 ${className}`}>
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 font-semibold border-b border-slate-200 dark:border-slate-800">
          <tr>{headers.map((h, i) => <th key={i} className="p-3.5">{h}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
              {row.map((cell, cIdx) => <td key={cIdx} className="p-3.5">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}