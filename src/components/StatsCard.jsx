import React from 'react';

export default function StatsCard({ title, value, trend, trendValue, status, icon, chart }) {
  return (
    <div className="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5 relative overflow-hidden group">
      {icon && (
        <div className="absolute top-0 right-0 p-4">
          <span className="material-symbols-outlined text-success opacity-50 group-hover:opacity-100 transition-opacity">
            {icon}
          </span>
        </div>
      )}
      <p className="font-overline text-overline text-tertiary uppercase mb-2">{title}</p>
      <div className="flex items-end gap-3">
        <h2 className="text-[2.5rem] font-black text-on-surface tracking-tight">{value}</h2>
        {chart && (
          <div className="mb-2 w-16 h-6">
            <svg className="w-full h-full stroke-success fill-none stroke-2" viewBox="0 0 100 40">
              <path d={chart} strokeLinecap="round"></path>
            </svg>
          </div>
        )}
        {trend && (
          <div className="mb-3 flex items-center text-success gap-1">
            <span className="material-symbols-outlined text-[16px]">{trend}</span>
            <span className="font-label-sm text-label-sm">{trendValue}</span>
          </div>
        )}
      </div>
      <p className={`font-caption text-caption mt-2 ${status === 'stable' ? 'text-success' : 'text-tertiary/60'}`}>
        {status === 'stable' ? 'UPTIME STABLE' : 'GLOBAL CLUSTERS'}
      </p>
    </div>
  );
}
