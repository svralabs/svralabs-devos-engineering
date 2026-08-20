import React from 'react';
export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
    success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    primary: "bg-primary/10 text-primary dark:text-primary-fixed"
  };
  return <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${variants[variant] || variants.default} ${className}`}>{children}</span>;
}