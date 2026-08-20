import React from 'react';
export default function Card({ children, className = '', title, subtitle, ...props }) {
  return (
    <div className={`bg-white dark:bg-[#1e1e24] rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 ${className}`} {...props}>
      {title && <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">{title}</h3>}
      {subtitle && <p className="text-sm text-slate-500 mb-4">{subtitle}</p>}
      {children}
    </div>
  );
}